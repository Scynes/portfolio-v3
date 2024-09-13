import BoxReveal from '@/components/magicui/box-reveal';
import GradualSpacing from '@/components/magicui/gradual-spacing';
import WordPullUp from '@/components/magicui/word-pull-up';
import { StaggeredText } from '@/components/staggered-text';
import { Container, Flex, Heading, Text, Button, Link as RadixLink } from '@radix-ui/themes';
import dynamic from 'next/dynamic';

import Link from 'next/link';

const SnakeGame = dynamic(() => import('@/components/snake/snake-game'), { ssr: false });

export default function Page() {

    return (
        <Flex className={ 'h-full overflow-y-scroll relative' } align={ 'center' }>
            <Container maxWidth={ '1400px' } className={ 'z-40' } px={{ initial: '6', sm: '9' }}>
                <Flex align={ 'center' } justify={ 'between' } className={ 'flex-col lg:flex-row sm:mt-52 gap-8 lg:mt-0' }>
                    <Flex gap={ '2' } direction={ 'column' } className={ 'w-fit' }>
                        <GradualSpacing className={ 'tracking-[-0.1em] text-xs' } text={ 'Hello! My name is' } />
                        <GradualSpacing className='tracking-[-0.1em] text-[1.9rem] sm:text-6xl' text={ 'Dustin Portell' } />
                        <GradualSpacing className={ 'tracking-[-0.1em] text-lg sm:text-3xl text-[--indigo-11] font-medium' } text={ '> Full Stack Developer' } />
                        <Flex direction={'column'} mt={'5'} gap={'1'}>
                            <BoxReveal>
                                <Text className={'text-[#607B96] transition-all'} size={{ initial: '1', sm: '3' }}>
                                    {'// welcome to my portfolio'}
                                </Text>
                            </BoxReveal>
                            <BoxReveal>
                                <Text className={'text-[#607B96] transition-all'} size={{ initial: '1', sm: '3' }}>
                                    {'// you can also view my github page'}
                                </Text>
                            </BoxReveal>
                            <BoxReveal>
                                <Text size={{ initial: '1', sm: '3' }} className={ 'transition-all' }>
                                    <span className={'text-[--indigo-11]'}>const </span>
                                    <span className={'text-[--jade-11] font-medium'}>github </span>
                                    <span>= </span>
                                    <span className={'text-[--tomato-11] font-medium'}>
                                        <RadixLink href={'https://github.com/Scynes'} className={'text-[--tomato-11] font-medium'} color={'tomato'}>
                                        &#34;https://github.com/Scynes&#34;;
                                        </RadixLink>
                                    </span>
                                </Text>
                            </BoxReveal>
                        </Flex>
                        <BoxReveal width={ '100%' }>
                            <Flex gap={ '3' } className={ 'flex-col sm:flex-row' } mt={ '5' }>                     
                                <Button asChild variant={ 'soft' } className={ 'transition-all sm:flex-1 cursor-pointer pointer-events-auto' } size={ '4' }>
                                    <Link href={ '/projects' }>
                                        View Projects
                                    </Link>
                                </Button>
                                <Button asChild variant={ 'outline' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={ '4' }>
                                    <Link href={ '/contact' }>
                                        { "Let's Chat" }
                                    </Link>
                                </Button>
                            </Flex>
                        </BoxReveal>
                    </Flex>
                    <SnakeGame />
                </Flex>
            </Container>
        </Flex>
    );
}