'use client';

import { Dropdown } from '@/components/dropdown';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/constants/projects';
import { TECHNOLOGIES } from '@/constants/technology';
import { Technology } from '@/types/technology';
import { Box, CheckboxGroup, Flex, Grid, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

export default function Page () {

    const [ selectedValues, setSelectedValues ] = useState<string[]>([]);

    return (
        <Grid columns={{ initial: '1fr', sm: '14rem 1fr' }} rows={{ initial: 'auto 1fr', sm: 'auto' }} className={ 'pt-[47px] w-full h-full max-h-[calc(100dvh-43px)]' }>
            <Flex className={ 'border-r border-[rgb(30,45,61)]' } direction={ 'column' }>
                <Dropdown title={ 'technologies' } expanded>
                    <CheckboxGroup.Root value={ selectedValues } onValueChange={ setSelectedValues } size={ '3' } color={ 'gray' } highContrast className={ 'gap-4' }>
                        { Object.entries(TECHNOLOGIES).map(([key, Icon]) => (
                            <CheckboxGroup.Item key={ key } value={ key } className={'flex gap-6 w-full cursor-pointer'}>
                                <Flex gap={'2'} align={'center'} className={'select-none'}>
                                    <Icon size={'1.5rem'} color={`${selectedValues.includes(key) ? '#486c92' : '#2c445d'}`} />
                                    <Text className={`${selectedValues.includes(key) ? 'text-white' : 'text-[#486c92]'}`}>
                                        { key }
                                    </Text>
                                </Flex>
                            </CheckboxGroup.Item>
                        )) }
                    </CheckboxGroup.Root>
                </Dropdown>
            </Flex>
            <Flex className={ 'overflow-y-scroll flex-1' } justify={ 'center' } direction={ 'column' }>
                <Flex className={ 'min-h-9 border-b border-[#1E2D3D]' }>
                    <Flex className={ `px-4 border-r border-[#1E2D3D] h-full` } align={ 'center' } gap={ '4' }>
                        <Text size={ '1' } className={ 'text-[#607B96]' }>
                            <span className={ 'text-[--indigo-11]' }>let </span>
                            <span className={ 'text-[--jade-11] font-medium' }>filters = </span>
                            <span>[ </span>
                            { selectedValues.length === 0 ? '"All"' : selectedValues.map(selected => `"${ selected }"`).join(", ") }
                            <span> ];</span>
                        </Text>
                        <Box className={ 'rounded-full p-[2px] hover:bg-[#232d36] cursor-pointer' }>
                            <RxCross2 size={ '0.75rem' } className={ '' } onClick={ () => setSelectedValues([]) } color={ '#607B96' } />
                        </Box>
                    </Flex>
                </Flex>
                <Flex wrap={ 'wrap'} justify={ 'center' } gap={ '8' } px={ '4' } py={ '8' } className={ 'flex-1 h-full overflow-y-scroll self-center max-w-7xl no-scrollbar' }>
                    { PROJECTS.filter(project => selectedValues.length === 0 || selectedValues.every(tech => project.technologies.includes(tech as Technology))).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    )) }
                </Flex>
            </Flex>
        </Grid>
    )
}