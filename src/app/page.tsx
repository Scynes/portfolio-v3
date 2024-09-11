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
                        <Text className={ 'entry-title' } size={{ initial: '1', sm: '3' }}>
                            <StaggeredText delay={ 0 }>
                                { `Hello, my name is` }
                            </StaggeredText>
                        </Text>
                        <Heading weight={ 'regular' } className={ 'transition-all text-[2.4rem] sm:text-6xl' }>
                            <StaggeredText delay={ 0.5 }>
                                { `Dustin Portell` }
                            </StaggeredText>
                        </Heading>
                        <Heading size={{ initial: '4', sm: '7' }} weight={ 'regular' } color={ 'indigo' } className={ 'transition-all' }>
                            <StaggeredText delay={ 1 }>
                                { '> Full Stack Developer' }
                            </StaggeredText>
                        </Heading>
                        <Flex direction={'column'} mt={'5'} gap={'1'}>
                            <Text className={'text-[#607B96] transition-all'} size={{ initial: '1', sm: '3' }}>
                                <StaggeredText delay={ 1.5 }>
                                    {'// welcome to my portfolio'}
                                </StaggeredText>
                            </Text>
                            <Text className={'text-[#607B96] transition-all'} size={{ initial: '1', sm: '3' }}>
                                <StaggeredText delay={ 2 }>
                                    {'// you can also view my github page'}
                                </StaggeredText>
                            </Text>
                            <Text size={{ initial: '1', sm: '3' }} className={ 'transition-all' }>
                                <StaggeredText delay={ 2.25 }>
                                    <span className={'text-[--indigo-11]'}>const </span>
                                    <span className={'text-[--jade-11] font-medium'}>github </span>
                                    <span>= </span>
                                    <span className={'text-[--tomato-11] font-medium'}>
                                        <RadixLink href={'https://github.com/Scynes'} className={'text-[--tomato-11] font-medium'} color={'tomato'}>
                                        &#34;https://github.com/Scynes&#34;;
                                        </RadixLink>
                                    </span>
                                </StaggeredText>
                            </Text>
                        </Flex>
                        <Flex gap={ '3' } className={ 'flex-col sm:flex-row' } mt={ '5' }>                     
                            <Button asChild variant={ 'soft' } className={ 'transition-all sm:flex-1 cursor-pointer pointer-events-auto' } size={ '4' }>
                                <Link href={ '/projects' }>
                                    View Projects
                                </Link>
                            </Button>
                            <Button asChild variant={ 'outline' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={ '4' }>
                                <Link href={ '/about' }>
                                    { "Let's Chat" }
                                </Link>
                            </Button>
                        </Flex>
                    </Flex>
                    <SnakeGame />
                </Flex>
            </Container>
        </Flex>
    );
}