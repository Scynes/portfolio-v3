/**
 * Please don't judge this code. I quickly put it together in about in hour inside of a coffee shop
 * just shooting the shit to get things working. While I'm currently disappointed in this clusterfuck
 * it'll be refactored when I have the time to do it.
 */
'use client'

import { useState, useCallback, useRef, useEffect, MutableRefObject } from 'react'

const CANVAS_SIZE = 300
const GRID_SIZE = 15
const CELL_SIZE = CANVAS_SIZE / GRID_SIZE
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
}

const MAX_BEETLES = 5
const BEETLE_SPAWN_LENGTHS = [5, 10, 20, 30, 40]
const GAME_SPEED = 200 // ms between moves
const BEETLE_SPEED = 400 // ms between moves (slower than the snake)
const MAX_BAD_FOOD = 7
const GOLD_FOOD_CHANCE = 0.1
const POWER_UP_DURATION = 10000 // 10 seconds
const BEETLE_RESPAWN_TIME = 4000 // 4 seconds

interface Beetle {
  x: number
  y: number
  lastMoveTime: number
  isFollowing: boolean
  nextX: number
  nextY: number
}

interface SnakeSegment {
  x: number
  y: number
  prevX?: number
  prevY?: number
}

interface Food {
  x: number
  y: number
  type: 'normal' | 'bad' | 'gold'
}

interface GameState {
  snake: SnakeSegment[]
  foodItems: Food[]
  direction: { x: number; y: number }
  isPlaying: boolean
  lives: number
  foodEaten: number
  lastMoveTime: number
  nextPosition: { x: number; y: number }
  beetles: Beetle[]
  powerUpEndTime: number | null
  beetleRespawnTimers: number[]
  normalFoodCount: number
}

const initialGameState: GameState = {
  snake: INITIAL_SNAKE,
  foodItems: [],
  direction: DIRECTIONS.ArrowRight,
  isPlaying: false,
  lives: 3,
  foodEaten: 0,
  lastMoveTime: 0,
  nextPosition: { x: 11, y: 10 },
  beetles: [],
  powerUpEndTime: null,
  beetleRespawnTimers: [],
  normalFoodCount: 0,
}

export function useSnakeGame(canvasRef: MutableRefObject<HTMLCanvasElement | null>, setHighScore: (score: number) => void) {
  const [gameState, setGameState] = useState<GameState>({ ...initialGameState, foodItems: generateFoodItems(0) })
  const audioContextRef = useRef<AudioContext | null>(null)

  const playSound = useCallback((frequency: number, duration: number) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    const oscillator = audioContextRef.current.createOscillator()
    const gainNode = audioContextRef.current.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContextRef.current.destination)

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime)

    gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration)

    oscillator.start()
    oscillator.stop(audioContextRef.current.currentTime + duration)
  }, [])

  const moveSnake = useCallback(() => {
    setGameState((prevState) => {
      if (!prevState.isPlaying) return prevState

      const newSnake = [prevState.nextPosition, ...prevState.snake.slice(0, -1)]
      const head = newSnake[0]

      const nextPosition = {
        x: (head.x + prevState.direction.x + GRID_SIZE) % GRID_SIZE,
        y: (head.y + prevState.direction.y + GRID_SIZE) % GRID_SIZE,
      }

      const eatenFoodIndex = prevState.foodItems.findIndex(
        (food) => food.x === head.x && food.y === head.y
      )

      let newFoodItems = prevState.foodItems
      let newFoodEaten = prevState.foodEaten
      let newSnakeLength = newSnake.length
      let newPowerUpEndTime = prevState.powerUpEndTime
      let newNormalFoodCount = prevState.normalFoodCount

      if (eatenFoodIndex !== -1) {
        const food = prevState.foodItems[eatenFoodIndex]
        newFoodItems = prevState.foodItems.filter((_, index) => index !== eatenFoodIndex)

        if (food.type === 'bad') {
          playSound(200, 0.3) // Play bad food sound
          return handleCollision(prevState, newFoodItems)
        } else {
          playSound(440, 0.1) // Play good food sound
          newFoodEaten++
          setHighScore(Math.max(prevState.foodEaten, newFoodEaten))
          newSnake.push(prevState.snake[prevState.snake.length - 1])
          newSnakeLength++
          if (food.type === 'gold') {
            newPowerUpEndTime = Date.now() + POWER_UP_DURATION
          } else {
            newNormalFoodCount--
          }
        }

        if (newNormalFoodCount === 0) {
          newFoodItems = generateFoodItems(newSnakeLength)
          newNormalFoodCount = newFoodItems.filter(food => food.type === 'normal').length
        }
      }

      let newBeetles = updateBeetles(prevState.beetles, head, newSnakeLength, prevState.powerUpEndTime !== null)
      let newBeetleRespawnTimers = [...prevState.beetleRespawnTimers]
      
      if (isCollision(newSnake) || (isBeetleCollision(head, newBeetles) && !prevState.powerUpEndTime)) {
        playSound(200, 0.3) // Play collision sound
        return handleCollision(prevState, generateFoodItems(newSnakeLength))
      }

      // Remove eaten beetles and start respawn timer
      const eatenBeetles = newBeetles.filter(beetle => beetle.x === head.x && beetle.y === head.y)
      if (eatenBeetles.length > 0 && prevState.powerUpEndTime) {
        newBeetles = newBeetles.filter(beetle => !eatenBeetles.includes(beetle))
        newBeetleRespawnTimers.push(Date.now() + BEETLE_RESPAWN_TIME)
        newFoodEaten += eatenBeetles.length
        playSound(660, 0.1) // Play beetle eating sound
      }

      // Check for beetle respawn
      const currentTime = Date.now()
      while (newBeetleRespawnTimers.length > 0 && newBeetleRespawnTimers[0] <= currentTime) {
        newBeetleRespawnTimers.shift()
        if (newBeetles.length < MAX_BEETLES) {
          newBeetles.push(generateBeetle(newBeetles.length % 2 === 0))
        }
      }

      // Check if power-up has ended
      if (newPowerUpEndTime && currentTime > newPowerUpEndTime) {
        newPowerUpEndTime = null
      }

      return { 
        ...prevState, 
        snake: newSnake, 
        lastMoveTime: currentTime, 
        nextPosition,
        foodItems: newFoodItems,
        foodEaten: newFoodEaten,
        beetles: newBeetles,
        beetleRespawnTimers: newBeetleRespawnTimers,
        powerUpEndTime: newPowerUpEndTime,
        normalFoodCount: newNormalFoodCount,
      }
    })
  }, [setHighScore, playSound])

  const startGame = useCallback(() => {
    const initialFoodItems = generateFoodItems(INITIAL_SNAKE.length)
    const initialNormalFoodCount = initialFoodItems.filter(food => food.type === 'normal').length
    setGameState({ 
      ...initialGameState, 
      foodItems: initialFoodItems, 
      isPlaying: true, 
      lastMoveTime: Date.now(),
      normalFoodCount: initialNormalFoodCount,
    })
  }, [])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      const newDirection = DIRECTIONS[e.key as keyof typeof DIRECTIONS]
      if (newDirection) {
        setGameState((prevState) => ({ ...prevState, direction: newDirection }))
      }
    },
    []
  )

  useEffect(() => {
    let gameLoop: NodeJS.Timeout
    if (gameState.isPlaying) {
      gameLoop = setInterval(moveSnake, GAME_SPEED)
    }
    return () => clearInterval(gameLoop)
  }, [gameState.isPlaying, moveSnake])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
      drawGrid(ctx)
      drawFoodItems(ctx, gameState.foodItems)
      drawSnake(ctx, gameState)
      drawBeetles(ctx, gameState.beetles, gameState.powerUpEndTime !== null)
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animationFrameId)
  }, [gameState, canvasRef])

  return { gameState, startGame, handleKeyPress }
}

function drawBeetles(ctx: CanvasRenderingContext2D, beetles: Beetle[], isPowerUp: boolean) {
  const currentTime = Date.now()
  beetles.forEach((beetle) => {
    const moveProgress = Math.min((currentTime - beetle.lastMoveTime) / BEETLE_SPEED, 1)
    const x = (beetle.x + (beetle.nextX - beetle.x) * moveProgress) * CELL_SIZE + CELL_SIZE / 2
    const y = (beetle.y + (beetle.nextY - beetle.y) * moveProgress) * CELL_SIZE + CELL_SIZE / 2
    const radius = CELL_SIZE / 3

    ctx.fillStyle = isPowerUp ? '#4287f5' : '#8B4513'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()

    ctx.strokeStyle = isPowerUp ? '#4287f5' : '#8B4513'
    ctx.lineWidth = 2
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + Math.cos(angle) * radius * 1.5, y + Math.sin(angle) * radius * 1.5)
      ctx.stroke()
    }

    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x - radius / 3, y - radius / 3, radius / 5, 0, 2 * Math.PI)
    ctx.arc(x + radius / 3, y - radius / 3, radius / 5, 0, 2 * Math.PI)
    ctx.fill()
  })
}

function generateFoodItems(snakeLength: number): Food[] {
  const foodItems: Food[] = []
  const normalFoodCount = Math.floor(Math.random() * 5) + 1 // 1 to 5 normal food items
  
  for (let i = 0; i < normalFoodCount; i++) {
    foodItems.push({ 
      x: Math.floor(Math.random() * GRID_SIZE), 
      y: Math.floor(Math.random() * GRID_SIZE), 
      type: 'normal' 
    })
  }
  
  while (foodItems.length < MAX_BAD_FOOD + normalFoodCount) {
    const newFood: Food = { 
      x: Math.floor(Math.random() * GRID_SIZE), 
      y: Math.floor(Math.random() * GRID_SIZE), 
      type: Math.random() < GOLD_FOOD_CHANCE && snakeLength >= BEETLE_SPAWN_LENGTHS[0] ? 'gold' : 'bad'
    }
    if (!foodItems.some(food => food.x === newFood.x && food.y === newFood.y)) {
      foodItems.push(newFood)
    }
  }

  return foodItems
}

function isCollision(snake: SnakeSegment[]): boolean {
  const head = snake[0]
  return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
}

function generateBeetle(isFollowing: boolean): Beetle {
  const x = Math.floor(Math.random() * GRID_SIZE)
  const y = Math.floor(Math.random() * GRID_SIZE)
  return {
    x,
    y,
    lastMoveTime: Date.now(),
    isFollowing,
    nextX: x,
    nextY: y
  }
}

function updateBeetles(beetles: Beetle[], snakeHead: SnakeSegment, snakeLength: number, isPowerUp: boolean): Beetle[] {
  const currentTime = Date.now()
  
  while (beetles.length < BEETLE_SPAWN_LENGTHS.filter(length => snakeLength >= length).length && beetles.length < MAX_BEETLES) {
    beetles.push(generateBeetle(beetles.length % 2 === 0))
  }

  return beetles.map(beetle => {
    if (currentTime - beetle.lastMoveTime >= BEETLE_SPEED) {
      let dx = snakeHead.x - beetle.x
      let dy = snakeHead.y - beetle.y
      
      if (Math.abs(dx) > Math.abs(dy)) {
        beetle.nextX = beetle.x + Math.sign(dx)
      } else {
        beetle.nextY = beetle.y + Math.sign(dy)
      }

      if (!beetles.some(otherBeetle => otherBeetle !== beetle && otherBeetle.nextX === beetle.nextX && otherBeetle.nextY === beetle.nextY)) {
        return {
          ...beetle,
          x: beetle.nextX,
          y: beetle.nextY,
          nextX: (beetle.nextX + GRID_SIZE) % GRID_SIZE,
          nextY: (beetle.nextY + GRID_SIZE) % GRID_SIZE,
          lastMoveTime: currentTime
        }
      }
    }
    return beetle
  })
}

function isBeetleCollision(head: SnakeSegment, beetles: Beetle[]): boolean {
  return beetles.some(beetle => beetle.x === head.x && beetle.y === head.y)
}

function handleCollision(prevState: GameState, newFoodItems: Food[]): GameState {
  if (prevState.lives > 1) {
    return {
      ...prevState,
      snake: INITIAL_SNAKE,
      direction: DIRECTIONS.ArrowRight,
      lives: prevState.lives - 1,
      lastMoveTime: Date.now(),
      nextPosition: { x: 11, y: 10 },
      foodItems: newFoodItems,
      beetles: [],
      powerUpEndTime: null,
      beetleRespawnTimers: [],
      normalFoodCount: newFoodItems.filter(food => food.type === 'normal').length,
    }
  } else {
    return {
      ...prevState,
      isPlaying: false,
      lives: 0,
      foodItems: newFoodItems,
      beetles: [],
      powerUpEndTime: null,
      beetleRespawnTimers: [],
      normalFoodCount: 0,
    }
  }
}

function drawGrid(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
  ctx.lineWidth = 1
  for (let x = 0; x <= CANVAS_SIZE; x += CELL_SIZE) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, CANVAS_SIZE)
    ctx.stroke()
  }
  for (let y = 0; y <= CANVAS_SIZE; y += CELL_SIZE) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(CANVAS_SIZE, y)
    ctx.stroke()
  }
}

function drawFoodItems(ctx: CanvasRenderingContext2D, foodItems: Food[]) {
  foodItems.forEach((food) => {
    const time = Date.now()
    const baseRadius = CELL_SIZE / 4 * 0.8
    const pingMaxSize = CELL_SIZE / 3 * 1.2
    const pulseDuration = 1000

    const pulseProgress = (time % pulseDuration) / pulseDuration
    const pingSize = baseRadius + (pingMaxSize - baseRadius) * Math.abs(Math.sin(pulseProgress * Math.PI * 2))

    let fillColor, pulseColor
    switch (food.type) {
      case 'normal':
        fillColor = '#6bff6b'
        pulseColor = 'rgba(107, 255, 107, 0.5)'
        break
      case 'bad':
        fillColor = '#ff6b6b'
        pulseColor = 'rgba(255, 107, 107, 0.5)'
        break
      case 'gold':
        fillColor = '#ffd700'
        pulseColor = 'rgba(255, 215, 0, 0.5)'
        break
    }

    ctx.fillStyle = pulseColor
    ctx.beginPath()
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      pingSize,
      0,
      2 * Math.PI
    )
    ctx.fill()

    ctx.fillStyle = fillColor
    ctx.beginPath()
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      baseRadius,
      0,
      2 * Math.PI
    )
    ctx.fill()
  })
}

function drawSnake(ctx: CanvasRenderingContext2D, gameState: GameState) {
  const timeSinceLastMove = Date.now() - gameState.lastMoveTime
  const moveProgress = Math.min(timeSinceLastMove / GAME_SPEED, 1)

  gameState.snake.forEach((segment, index) => {
    let interpolatedX, interpolatedY

    if (index === 0) {
      interpolatedX = segment.x + (gameState.nextPosition.x - segment.x) * moveProgress
      interpolatedY = segment.y + (gameState.nextPosition.y - segment.y) * moveProgress
    } else {
      const prevSegment = gameState.snake[index - 1]
      const prevX = segment.prevX || segment.x
      const prevY = segment.prevY || segment.y
      interpolatedX = prevX + (prevSegment.x - prevX) * moveProgress
      interpolatedY = prevY + (prevSegment.y - prevY) * moveProgress
      segment.prevX = segment.x
      segment.prevY = segment.y
    }

    const time = Date.now()
    const blobFrequency = 0.005
    const blobAmplitude = 0.2

    const maxRadius = CELL_SIZE / 2
    const minRadius = CELL_SIZE / 6
    const baseRadius = minRadius + (maxRadius - minRadius) * (1 - index / gameState.snake.length)
    const blobEffect = Math.sin(time * blobFrequency + index) * blobAmplitude
    const radius = baseRadius * (1 + blobEffect)

    const hue = (200 + index * 5) % 360
    const saturation = 80 + Math.sin(time * 0.001 + index * 0.1) * 20
    const lightness = 50 + Math.sin(time * 0.002 + index * 0.2) * 10
    const alpha = 1 - index / gameState.snake.length

    if (index === 0) {
      const centerX = interpolatedX * CELL_SIZE + CELL_SIZE / 2
      const centerY = interpolatedY * CELL_SIZE + CELL_SIZE / 2

      // Draw snake head (colored)
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`
      
      // First pass: larger, blurred circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.95, 0, 2 * Math.PI)
      ctx.fill()
      
      // Second pass: slightly smaller, sharp circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.9, 0, 2 * Math.PI)
      ctx.fill()

      // Draw mouth (invisible)
      const mouthAngle = Math.PI / 7 * (1 + Math.sin(time * 0.01))
      const directionAngle = Math.atan2(gameState.direction.y, gameState.direction.x)

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius * 0.9, directionAngle - mouthAngle, directionAngle + mouthAngle)
      ctx.closePath()
      ctx.fill()
      ctx.globalCompositeOperation = 'source-over'

      // Draw eyes
      const eyeRadius = radius * 0.25
      const eyeOffset = radius * -0.3
      let leftEyeX = centerX
      let leftEyeY = centerY
      let rightEyeX = centerX
      let rightEyeY = centerY

      switch (gameState.direction) {
        case DIRECTIONS.ArrowUp:
          leftEyeX -= eyeOffset
          rightEyeX += eyeOffset
          leftEyeY -= eyeOffset
          rightEyeY -= eyeOffset
          break
        case DIRECTIONS.ArrowDown:
          leftEyeX += eyeOffset
          rightEyeX -= eyeOffset
          leftEyeY += eyeOffset
          rightEyeY += eyeOffset
          break
        case DIRECTIONS.ArrowLeft:
          leftEyeX -= eyeOffset
          rightEyeX -= eyeOffset
          leftEyeY -= eyeOffset
          rightEyeY += eyeOffset
          break
        case DIRECTIONS.ArrowRight:
          leftEyeX += eyeOffset
          rightEyeX += eyeOffset
          leftEyeY -= eyeOffset
          rightEyeY += eyeOffset
          break
      }

      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(leftEyeX, leftEyeY, eyeRadius, 0, 2 * Math.PI)
      ctx.arc(rightEyeX, rightEyeY, eyeRadius, 0, 2 * Math.PI)
      ctx.fill()

      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.arc(leftEyeX, leftEyeY, eyeRadius * 0.5, 0, 2 * Math.PI)
      ctx.arc(rightEyeX, rightEyeY, eyeRadius * 0.5, 0, 2 * Math.PI)
      ctx.fill()
    } else {
      // Draw snake body
      ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
      ctx.beginPath()
      ctx.arc(
        interpolatedX * CELL_SIZE + CELL_SIZE / 2,
        interpolatedY * CELL_SIZE + CELL_SIZE / 2,
        radius,
        0,
        2 * Math.PI
      )
      ctx.fill()
    }
  })
}