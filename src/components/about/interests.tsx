import { Flex, Separator, Text } from '@radix-ui/themes';

export const Interests = () => {
    return (
        <Flex direction={ 'column' } className={ 'p-4 sm:p-8 max-w-2xl mx-auto rounded-lg shadow-md bg-[--color-panel] bg-opacity-10 border border-[#1E2D3D]' }>
            <Flex justify={ 'between' } align={ 'center' } className={ '' }>
                <Text className={ 'text-2xl sm:text-3xl font-bold text-[--orange-11]' }>Wait a sec!</Text>
            </Flex>

            <Separator className={ 'my-4' } size={ '4' }/>
            <Text className={ 'text-sm sm:text-lg text-gray-300 leading-relaxed' }>
                It's awesome you want to know my interests! I'm currently working on this section, so check back soon for more details.
            </Text>
        </Flex>
    );
}