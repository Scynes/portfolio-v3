import { Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

export const Dropdown = ({ title, children }: { title: string, children: React.ReactNode }) => {

    const [ menuExpanded, setMenuExpanded ] = useState<boolean>(false);

    return (
        <Flex className={ 'flex-1' } direction={ 'column' }>
            <Flex onClick={ () => setMenuExpanded(!menuExpanded) } className={ 'h-9 border-b border-[#1E2D3D] px-4 cursor-pointer hover:bg-[--color-panel]' } align={ 'center' } gap={ '2' }>
                <GoTriangleDown size={ '1rem' } className={ `transition-all ${ !menuExpanded && 'rotate-180' }` } />
                <Text className={ 'select-none' }>
                    { title }
                </Text>
            </Flex>
            <Flex direction={ 'column' } className={ `transition-all overflow-hidden px-4 border-[#1E2D3D] ${ menuExpanded ? 'max-h-96 py-4 border-b' : 'border-none max-h-0' }` }>
                { children }
            </Flex>
        </Flex>
    );
}