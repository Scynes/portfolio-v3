import { TECHNOLOGIES } from '@/constants/technology';
import { Project } from '@/types/project';
import { Box, Card, Flex, Heading, Inset, Text, Tooltip } from '@radix-ui/themes';

import Image from 'next/image';

export const ProjectPreviewCard = ({ project }: { project: Project }) => {
    return (
        <Flex className='sm:min-w-[30rem]' direction={ 'column' } gap={ '2' }>
            <Flex gap={{ initial: '1', sm: '2' }} direction={{ initial: 'column', sm: 'row' }}>
                <Heading size={ '3' } weight={ 'bold' } color={ 'indigo' }>
                    { project.title }
                </Heading>
                <Text size={ '2' } className={ 'text-[#607B96]' }>// { project.shortDescription }</Text>
            </Flex>
            <Card size={ '5' } className='w-full h-fit'>
                <Inset clip={ 'padding-box' }>
                    <Image src={ `/${ project.imgSrc }` } alt={ 'placeholder' } width={ 500 } height={ 180 } className={ 'rounded-xl' } />
                </Inset>
            </Card>
            <Flex gap={ '2' }>
                { project.technologies.map((technology, index) => {
                    
                    const IconComponent = TECHNOLOGIES[technology];

                    return (
                        <Tooltip key={ index } content={ technology } className={ 'bg-[#567fac]' }>
                            <Box>
                                <IconComponent size={ '1.5rem' } color={ '#607B96' } />
                            </Box>
                        </Tooltip>
                    );
                }) }
            </Flex>
        </Flex>
    );
}