'use client';

import { Box, Flex, Heading } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { TopBarLink } from '@/components/navigation/top-bar-link';

export const TopBar = () => {

    const PATH_NAME = usePathname();

    const PATHS = [
        { title: '_home', href: '/' },
        { title: '_about', href: '/about' },
        { title: '_projects', href: '/projects' },
    ];

    return (
        <Flex className={ 'fixed border-b border-[#1E2D3D] w-full' }>
            <Box className={ 'py-3 px-4 w-56 border-r border-[#1E2D3D]' }>
                <Heading weight={ 'regular' } size={ '3' } className={ 'text-[#607B96] text-left' }>dustin-portell</Heading>
            </Box>
            { PATHS.map( path => <TopBarLink key={ path.href } title={ path.title } href={ path.href }/> ) }
        </Flex>
    );
}