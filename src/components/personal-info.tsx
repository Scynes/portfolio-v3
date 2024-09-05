import { Flex, Text } from '@radix-ui/themes';
import { FaChevronRight } from 'react-icons/fa6';
import { IoNewspaper } from 'react-icons/io5';

export const PersonalInfo = ({ title, onClick, selected, colorClass }: { title: string, onClick: () => void, selected: boolean, colorClass: string }) => {
    return (
        <Flex gap={ '2' } align={ 'center' } onClick={ onClick } className={ `cursor-pointer ${ selected ? colorClass : 'text-[#607B96]' } ${ !selected && 'hover:text-[#7da0c4]' }` }>
            <FaChevronRight className={ `transition-all ${ selected ? 'text-[.75rem]' : 'text-[0rem]' }` } />
            <IoNewspaper size={ '1rem' } />
            <Text size={ '1' } className={ '' }>
                { title }
            </Text>
        </Flex>
    );
}