'use client';

import { PROJECT_TYPES } from '@/constants/project-types';
import { CheckboxGroup, Flex, Grid, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

export default function Page () {

    const [ selectedValues, setSelectedValues ] = useState<string[]>([]);

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
        </Grid>
    )
}