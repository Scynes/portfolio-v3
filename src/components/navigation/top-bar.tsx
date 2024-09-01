'use client';

import { Box, Flex, Heading, Separator } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { TopBarLink } from '@/components/navigation/top-bar-link';

import Link from 'next/link';

export const TopBar = () => {

    const PATH_NAME = usePathname();

    const PATHS = [
        { title: '_home', href: '/' },
        { title: '_about', href: '/about' },
        { title: '_projects', href: '/projects' },
    ];

    return (
        <Flex className={ 'fixed border-b border-[#1E2D3D] w-full' } align={ 'center' }>
            <Box className={ 'py-3 px-4 w-72' }>
                <Heading weight={ 'regular' } size={ '3' } className={ 'text-[#607B96] text-left' }>dustin-portell</Heading>
            </Box>
            <Separator orientation={ 'vertical' } size={ '2' } className={ 'bg-[#1E2D3D]' }/>
            { PATHS.map( path => <TopBarLink key={ path.href } title={ path.title } href={ path.href }/> ) }
        </Flex>
    );
}