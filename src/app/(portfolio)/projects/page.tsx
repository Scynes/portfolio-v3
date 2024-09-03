'use client';

import { Dropdown } from '@/components/dropdown';
import { ProjectPreviewCard } from '@/components/project-preview-card';
import { PROJECT_TYPES } from '@/constants/project-types';
import { PROJECTS } from '@/constants/projects';
import { Box, Card, CheckboxGroup, Container, Flex, Grid, Inset, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { useState } from 'react';

export default function Page () {

    const [ selectedValues, setSelectedValues ] = useState<string[]>([]);

    return (
        <Grid columns={{ initial: '1fr', sm: '14rem 1fr' }} rows={{ initial: 'auto 1fr', sm: 'auto' }} className={ 'pt-[47px] w-full h-full max-h-[calc(100dvh-43px)]' }>
            <Flex className={ 'border-r border-[rgb(30,45,61)]' } direction={ 'column' }>
                <Dropdown title={ 'projects filter' } expanded>
                    <CheckboxGroup.Root value={ selectedValues } onValueChange={ setSelectedValues } size={ '3' } color={ 'gray' } highContrast className={ 'gap-4' }>
                        { PROJECT_TYPES.map( project => (
                            <CheckboxGroup.Item key={ project.value } value={ project.value } className={ 'flex gap-6 w-full cursor-pointer' }>
                                <Flex gap={ '2' } align={ 'center' } className={ 'select-none ' }>
                                    <project.icon size={ '1.5rem' } color={ `${ selectedValues.includes(project.value) ? '#486c92' : '#2c445d' }` } />
                                    <Text className={ `${ selectedValues.includes(project.value) ? 'text-white' : 'text-[#486c92]' }` }>
                                        { project.value }
                                    </Text>
                                </Flex>
                            </CheckboxGroup.Item>
                        )) }
                    </CheckboxGroup.Root>
                </Dropdown>
            </Flex>
            <Flex className={ 'overflow-y-scroll flex-1' } justify={ 'center' } direction={ 'column' }>
                <Flex className={ 'min-h-9 border-b border-[#1E2D3D]' }>
                    Currently Filtered
                </Flex>
                <Flex wrap={ 'wrap'} justify={ 'center' } gap={ '8' } px={ '4' } py={ '8' } className={ 'flex-1 h-full overflow-y-scroll self-center max-w-7xl no-scrollbar' }>
                    { PROJECTS.map((project, index) => (
                        <ProjectPreviewCard key={ index } project={ project } />
                    )) }
                </Flex>
            </Flex>
        </Grid>
    )
}