'use client';

import { Box, Callout, Flex, Heading } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { TopBarLink } from '@/components/navigation/top-bar-link';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { FaExclamationCircle } from "react-icons/fa";

export const TopBar = () => {

    const [ expanded, setExpanded ] = useState<boolean>(false);

    const PATH_NAME = usePathname();

    const PATHS = [
        { title: '_home', href: '/' },
        { title: '_projects', href: '/projects' },
        { title: '_about', href: '/about' },
        { title: '_contact', href: '/contact' },
    ];

    return (
        <Flex position={ 'fixed' } className={ 'flex-1 w-full z-50 ' } direction={ 'column' } gap={ '4' }>
            <Flex className={ `flex-1 transition-all overflow-hidden border-b border-[#1E2D3D] w-full ${ expanded && 'h-auto' } flex-col md:flex-row bg-[--sky-2]` }>
                <Flex className={ `${ expanded && 'border-b sm:border-b-0' } py-3 px-4 w-full md:w-56 sm:border-r border-[#1E2D3D]` } justify={ 'between' }>
                    <Heading weight={ 'regular' } size={ '3' } className={ 'text-[#607B96] text-left' }>dustin-portell</Heading>
                    <Box onClick={ () => setExpanded(!expanded) } className={ 'md:hidden' }>
                        { expanded ? <RxCross2 size={ '1.5rem' } className={ 'text-[#607B96] cursor-pointer' } /> : <RxHamburgerMenu size={ '1.5rem' } className={ 'text-[#607B96] cursor-pointer' } /> }
                    </Box>
                </Flex>
                <Flex className={ 'hidden md:flex' }>
                    { PATHS.map( path => <TopBarLink key={ path.href } title={ path.title } href={ path.href }/> ) }
                </Flex>
                <Flex direction={ 'column' } className={ `z-50 md:hidden ${ !expanded && 'h-0' }` }>
                    { PATHS.map( path => 
                        <Box key={ path.href } className={ 'border-b border-[#1E2D3D]' }>
                            <TopBarLink title={ path.title } href={ path.href }/> 
                        </Box>
                    ) }
                </Flex>
            </Flex>
            <Flex className={ `hidden ${ PATH_NAME === '/' && 'lg:flex'}` } justify={ 'center' }>
                <Callout.Root variant={ 'surface' } color={ 'amber' }>
                    <Callout.Icon>
                        <FaExclamationCircle />
                    </Callout.Icon>
                    <Callout.Text>
                        { 'This is a newly developed portfolio! Some functionality may not yet be fully implemented yet.' }
                    </Callout.Text>
                </Callout.Root>
            </Flex>
        </Flex>
    );
}