'use client';

import { Box, Flex, Text, Separator } from '@radix-ui/themes';
import { FaCode, FaGamepad, FaCoffee } from 'react-icons/fa';

export const AboutMe = () => {
    return (
        <Flex direction={ 'column' } className={ 'p-4 sm:p-8 max-w-2xl mx-auto rounded-lg shadow-md bg-[--color-panel] bg-opacity-10 border border-[#1E2D3D]' }>
            <Flex justify={ 'between' } align={ 'center' } className={ '' }>
                <Text className={ 'text-2xl sm:text-3xl font-bold text-[--orange-11]' }>Hey, I&#34;m Dustin</Text>
                <FaCode className={ 'text-2xl text-gray-400' } />
            </Flex>

            <Separator className={ 'my-4' } size={ '4' }/>

            <Text className={ 'text-sm sm:text-lg text-gray-300 leading-relaxed' }>
                I&#34;m a full stack developer with a passion for building cool things using <strong className={ 'text-black' }>Next.js</strong>, <strong className={ 'text-[--violet-11]' }>Radix UI</strong>, and <strong className={ 'text-[--indigo-11]' }>Tailwind CSS</strong>. 
                I like keeping things simple, clean, and efficient—whether it&#34;s in my code or my workflow.
            </Text>

            <Box className={ 'my-4 w-full h-1' }/>

            <Text className={ 'text-sm sm:text-lg text-gray-300 leading-relaxed' }>
                Outside of coding, I&#34;m all about <strong className={ 'text-[--orange-11]' }>gaming</strong>, diving into <strong className={ 'text-[--jade-11]' }>MMORPGs</strong>, and brewing up way too much <strong className={ 'text-[--brown-11]' }>coffee</strong> while brainstorming new projects.
                Currently, I&#34;m working on some cool things like a <strong className={ 'text-[--amber-11]' }>ChatGPT clone</strong>, an <strong className={ 'text-[--jade-11]' }>MMORPG game concept</strong>, and always hunting for the next exciting project.
            </Text>

            <Box className={ 'my-4 w-full h-1' }/>

            <Text className={ 'text-sm sm:text-lg text-gray-300 leading-relaxed' }>
                Interesting in learning more about me? Checkout the options <span className={ 'hidden sm:inline-block' }>to the left! 👈</span> <span className={ 'sm:hidden' }>at the top! ☝️</span>
            </Text>

            <Separator className={ 'my-4 invisible' } />

            <Flex gap={ '6' } className={ 'mt-auto' }>
                <Flex align={ 'center' } className={ 'text-gray-400' }>
                    <FaGamepad className={ 'mr-2' } />
                    <Text className={ 'text-xs sm:text-lg' }>Gaming Enthusiast</Text>
                </Flex>
                <Flex align={ 'center' } className={ 'text-gray-400' }>
                    <FaCoffee className={ 'mr-2' } />
                    <Text className={ 'text-xs sm:text-lg' }>Coffee Addict</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
