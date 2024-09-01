'use client';

import { CheckboxGroup, Flex, Grid, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill, RiReactjsLine } from "react-icons/ri";

export default function PortfolioLayout ({ children }: { children: React.ReactNode }) {

    const [ selectedValues, setSelectedValues ] = useState<string[]>([]);

    const PROJECT_TYPES = [
        { value: 'React', icon: RiReactjsLine },
        { value: 'Next.js', icon: RiNextjsFill },
        { value: 'Tailwind', icon: RiTailwindCssFill },
        { value: 'HTML', icon: RiHtml5Fill },
        { value: 'CSS', icon: RiCss3Fill },
    ]

    useEffect(() => {
        console.log(selectedValues);
    }, [selectedValues]);

    return (
        <Grid columns={ '14rem 1fr' } className={ 'pt-[47px]' }>
            <Flex className={ 'border-r border-[rgb(30,45,61)]' } direction={ 'column' }>
                <Flex className={ 'h-9 border-b border-[#1E2D3D] px-4' } align={ 'center' } gap={ '2' }>
                    <GoTriangleDown size={ '1rem' } />
                    <Text>projects</Text>
                </Flex>
                <Flex direction={ 'column' } p={ '4' }>
                    <CheckboxGroup.Root value={ selectedValues } onValueChange={ setSelectedValues } size={ '3' } color={ 'gray' } highContrast className={ 'gap-4' }>
                        { PROJECT_TYPES.map( project => (
                            <CheckboxGroup.Item key={ project.value } value={ project.value } className={ 'flex gap-6 w-full cursor-pointer' }>
                                <Flex gap={ '2' } align={ 'center' } className={ 'select-none' }>
                                    <project.icon size={ '1.5rem' } color={ `${ selectedValues.includes(project.value) ? '#486c92' : '#2c445d' }` } />
                                    <Text className={ 'text-white' }>{ project.value }</Text>
                                </Flex>
                            </CheckboxGroup.Item>
                        )) }
                    </CheckboxGroup.Root>
                </Flex>
            </Flex>
            { children }
        </Grid>
    );
}