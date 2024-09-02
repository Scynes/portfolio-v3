'use client';

import { Dropdown } from '@/components/dropdown';
import { PROJECT_TYPES } from '@/constants/project-types';
import { CheckboxGroup, Flex, Grid, Text } from '@radix-ui/themes';
import { useState } from 'react';

export default function Page () {

    const [ selectedValues, setSelectedValues ] = useState<string[]>([]);

    return (
        <Grid columns={{ initial: '1fr', sm: '14rem 1fr' }} rows={{ initial: 'auto 1fr', sm: 'auto' }} className={ 'w-full h-full max-h-[calc(100dvh-43px)]' }>
            <Flex className={ 'pt-[47px] border-r border-[rgb(30,45,61)]' } direction={ 'column' }>
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
            <Flex className='sm:pt-[47px] overflow-y-scroll'>
                hello
            </Flex>
        </Grid>
    )
}