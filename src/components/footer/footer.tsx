import { Box, Flex, Heading } from '@radix-ui/themes';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import Link from 'next/link';

export const Footer = () => {
    return (
        <Flex className={ 'flex-1 border-t border-[#1E2D3D]' }>
            <Box className={ 'py-3 px-4' }>
                <Heading weight={ 'regular' } size={ '2' } className={ 'text-[#607B96] text-left' }>find me in:</Heading>
            </Box>
            <div className={ 'bg-[#1E2D3D] w-[1px] h-full'}/>
            <Flex asChild align={ 'center' } justify={ 'center' } className={ 'transition-all w-11 hover:bg-[--color-panel] active:bg-[--accent-2]' }>
                <Link href={ '/' }>
                    <FaLinkedinIn className={ 'text-[#607B96]' } size={ '1.25rem' } />
                </Link>
            </Flex>
            <div className={ 'bg-[#1E2D3D] w-[1px] h-full'}/>
            <Flex asChild align={ 'center' } justify={ 'center' } className={ 'transition-all w-11 hover:bg-[--color-panel] active:bg-[--accent-2]' }>
                <Link href={ '/' }>
                    <FaGithub className={ 'text-[#607B96]' } size={ '1.25rem' } />
                </Link>
            </Flex>
            <div className={ 'bg-[#1E2D3D] w-[1px] h-full'}/>
        </Flex>
    );
}