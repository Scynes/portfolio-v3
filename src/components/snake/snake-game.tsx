'use client';

import { Box, Button, Flex, Heading } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import { useSnakeGame } from './use-snake-game';
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";

export default function SnakeGame () {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [ highScore, setHighScore ] = useState<number>(0);

    const { gameState, startGame, handleKeyPress } = useSnakeGame(canvasRef, setHighScore);

    const MAX_LIVES = 3;

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    }, []);

    // Helper function to render hearts
    const renderHearts = () => {
        return Array.from({ length: MAX_LIVES }, (_, index) => {
            return index < gameState.lives ? (
                <FaHeart key={index} size={ '1.75rem' } className="text-red-500" />
            ) : (
                <FaHeartBroken key={index} size={ '1.75rem' } className="text-gray-500" />
            );
        });
    };

    return (
        <Flex className={ 'p-10 bg-[--color-panel] rounded-md border border-[--gray-7] gap-10 hidden sm:flex ' }>
            <Flex direction={ 'column' } gap={ '3' }>
                <canvas ref={ canvasRef } width={ 300 } height={ 300 } className={ '!w-[300px] !h-[300px] bg-[--color-panel] rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),_inset_0_-2px_4px_rgba(0,0,0,0.6)]' } />
                <Button onClick={ startGame } className={ 'transition-all cursor-pointer' } size={ '4' } variant={ 'outline' }>
                    Start Game
                </Button>
            </Flex>
            <Flex className={ 'flex-1' } direction={ 'column' } gap={ '6' }>
                <Flex className={ 'p-2 bg-[--color-panel] rounded-md' } justify={ 'between' } direction={ 'column' } gap={ '3' }>
                    <Heading weight={ 'medium' }>
                        { '// lives left' }
                    </Heading>
                    <Flex gap={ '3' }>
                        { renderHearts() }
                    </Flex>
                </Flex>
                <Flex className={ 'p-2 bg-[--color-panel] rounded-md' } justify={ 'between' } direction={ 'column' } gap={ '3' }>
                    <Heading weight={ 'medium' }>
                        { '// food left' }
                    </Heading>
                    <Flex gap={ '6' } wrap={ 'wrap' } className={ 'max-w-[185px]' }>
                        { gameState.foodItems.filter(food => food.type == 'normal' || food.type == 'gold').map((food, index) => (
                            <Box key={ index } className={ 'relative' }>
                                <Box className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                                <Box className={ 'relative w-4 h-4 rounded-full bg-green-400' } />
                            </Box>
                        )) }
                    </Flex>
                </Flex>
                <Flex className={ 'p-2 bg-[--color-panel] rounded-md' } justify={ 'between' } align={ 'center' }>
                    <FaTrophy size={ '1.75rem' } className={ 'text-yellow-500' } />
                    <Flex className={ 'flex-1' } align={ 'center' } justify={ 'center' }>
                        { highScore }
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}