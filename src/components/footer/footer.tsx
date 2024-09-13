import { Box, Flex, Heading } from '@radix-ui/themes';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import Link from 'next/link';
import { Separator } from '../separator';

export const Footer = () => {
    return (
        <Flex className={ 'flex-1 border-t border-[#1E2D3D]' }>
            <Flex className={ 'w-56 border-r border-[#1E2D3D]' }>
                <Box className={ 'py-3 pl-4 pr-[24px]' }>
                    <Heading weight={ 'regular' } size={ '2' } className={ 'text-[#607B96] text-left' }>find me in:</Heading>
                </Box>
                <Separator orientation={ 'vertical' } />
                <Flex asChild align={ 'center' } justify={ 'center' } className={ 'transition-all w-11 hover:bg-[--color-panel] active:bg-[--accent-2]' }>
                    <Link href={ 'https://linkedin.com/in/dustinjs' }>
                        <FaLinkedinIn className={ 'text-[#607B96]' } size={ '1.25rem' } />
                    </Link>
                </Flex>
                <Separator orientation={ 'vertical' } />
                <Flex asChild align={ 'center' } justify={ 'center' } className={ 'transition-all w-11 hover:bg-[--color-panel] active:bg-[--accent-2]' }>
                    <Link href={ 'https://github.com/Scynes' }>
                        <FaGithub className={ 'text-[#607B96]' } size={ '1.25rem' } />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}