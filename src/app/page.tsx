import { Container, Flex, Heading, Text, Button, Link as RadixLink } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <Flex className={ 'h-full' } align={ 'center' } px={{ initial: '6', sm: '9' }}>
            <Container maxWidth={ '1200px' }>
                <Flex gap={ '2' } direction={ 'column' } className={ 'w-fit' }>
                    <Text size={{ initial: '1', sm: '3' }}>
                        { `Hello, my name is` }
                    </Text>
                    <Heading weight={ 'regular' } className={ 'transition-all text-[2.4rem] sm:text-6xl' }>Dustin Portell</Heading>
                    <Heading size={{ initial: '4', sm: '7' }} weight={ 'regular' } color={ 'indigo' } className={ 'transition-all' }>
                        { `> Full Stack Developer` }
                    </Heading>
                    <Flex direction={ 'column' } mt={ '5' } gap={ '1' }>
                        <Text className={ 'text-[#607B96] transition-all' } size={{ initial: '1', sm: '3' }}>
                            { '// welcome to my portfolio' }
                        </Text>
                        <Text className={ 'text-[#607B96] transition-all' } size={{ initial: '1', sm: '3' }}>
                            { '// you can also view my github page' }
                        </Text>
                        <Text size={{ initial: '1', sm: '3' }} className={ 'transition-all' }>
                            <span className={ 'text-[--indigo-11]' }>const</span>
                            <span className={ 'text-[--jade-11] font-medium' }> github </span>
                            <span>= </span>
                            <span className={ 'text-[--tomato-11] font-medium' }>
                                <RadixLink href={ 'https://github.com/Scynes' } className={ 'text-[--tomato-11] font-medium' } color={ 'tomato' }>
                                    "https://github.com/Scynes";
                                </RadixLink>
                            </span>
                        </Text>
                    </Flex>
                    <Flex gap={ '3' } className={ 'flex-col sm:flex-row' } mt={ '5' }>                     
                        <Button asChild variant={ 'soft' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={ '4' }>
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
                <Image src={ '/background-blur.png' } alt={ 'hero' } fill className='object-cover sm:object-contain ml-0 sm:ml-40 md:ml-60 -z-50 animate-pulse'/>
            </Container>
        </Flex>
    );
}