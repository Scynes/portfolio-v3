import { Container, Flex, Heading, Text, Link } from '@radix-ui/themes';
import Image from 'next/image';

export default function Page() {
    return (
        <Flex className={ 'h-full' } align={ 'center' } px={ '6' }>
            <Container maxWidth={ '1200px' }>
                <Flex gap={ '2' } direction={ 'column' }>
                    <Text>
                        { `Hello, my name is` }
                    </Text>
                    <Heading size={ '9' } weight={ 'regular' }>Dustin Portell</Heading>
                    <Heading size={ '6' } weight={ 'regular' } color='indigo'>
                        { `> Full Stack Developer` }
                    </Heading>
                    <Flex direction={ 'column' } mt={ '7' } gap={ '1' }>
                        <Text className={ 'text-[#607B96]' }>{ '// welcome to my portfolio' }</Text>
                        <Text className={ 'text-[#607B96]' }>{ '// you can also view my github page' }</Text>
                        <Text>
                            <span className={ 'text-[--indigo-11]' }>const</span>
                            <span className={ 'text-[--jade-11] font-medium' }> github </span>
                            <span>= </span>
                            <span className={ 'text-[--tomato-11] font-medium' }>
                                <Link href={ 'https://github.com/Scynes' } className={ 'text-[--tomato-11] font-medium' } color={ 'tomato' }>
                                    "https://github.com/Scynes";
                                </Link>
                            </span>
                        </Text>
                    </Flex>
                </Flex>
                <Image src={ '/background-blur.png' } alt={ 'hero' } fill className='object-cover sm:object-contain ml-0 sm:ml-40 md:ml-60 -z-50'/>
            </Container>
        </Flex>
    );
}