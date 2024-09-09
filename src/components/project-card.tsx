import { TECHNOLOGIES } from '@/constants/technology';
import { Project } from '@/types/project';
import { Box, Button, Card, Container, Dialog, Flex, Heading, Inset, Link, ScrollArea, Text, Tooltip, VisuallyHidden } from '@radix-ui/themes';
import { FaEye } from "react-icons/fa6";

import Image from 'next/image';

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Flex className={ 'sm:min-w-[30rem]' } direction={ 'column' } gap={ '2' }>
            <Flex gap={{ initial: '1', sm: '2' }} direction={{ initial: 'column', sm: 'row' }}>
                <Heading size={ '3' } weight={ 'bold' } color={ 'indigo' }>
                    { project.title }
                </Heading>
                <Text size={{ initial: '1', sm: '2' }} className={ 'text-[#607B96]' }>
                    { `// ${ project.shortDescription }` }
                </Text>
            </Flex>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Card size={ '5' } className='relative w-full h-fit'>
                        <Inset clip={ 'padding-box' }>
                            <Flex className={ 'group cursor-pointer transition-all hover:bg-opacity-15 hover:backdrop-blur-sm h-full w-full absolute' } align={ 'center' } justify={ 'center' }>
                                <FaEye size={ '3rem' } className={ 'transition-all text-[--orange-11] opacity-0 group-active:scale-90 group-hover:opacity-100' } />
                            </Flex>
                            <Image src={ `/${ project.imgSrc }` } alt={ 'placeholder' } width={ 500 } height={ 180 } className={ '-z-20 rounded-xl' } />
                        </Inset>
                    </Card>
                </Dialog.Trigger>
                <Dialog.Content size={ '1' } className={ '!outline-none bg-[--sky-2]' }>
                    <VisuallyHidden>
                        <Dialog.Title>
                            { project.title }
                        </Dialog.Title>
                    </VisuallyHidden>
                    <Inset clip={ 'padding-box' } side={ 'top' } pb={ 'current' }>
                        <Image src={ `/${ project.imgSrc }` } alt={ 'placeholder' } width={ 700 } height={ 400 } className={ 'rounded-t-xl border-b-[3px] border-[--orange-11]' } />
                    </Inset>
                    <Flex justify={ 'between' }>
                        <Heading size={ '5' } weight={ 'bold' } color={ 'indigo' }>
                            { project.title }
                        </Heading>
                        <Flex gap={ '2' }>
                            { project.technologies.map((technology, index) => {
                                
                                const IconComponent = TECHNOLOGIES[technology];

                                return (
                                    <Tooltip key={ index } content={ technology } className={ 'bg-[--orange-11]' }>
                                        <Box>
                                            <IconComponent size={ '1.5rem' } className={ 'text-[--orange-11]' } />
                                        </Box>
                                    </Tooltip>
                                );
                            }) }
                        </Flex>
                    </Flex>
                    <Text size={ '1' } className={ 'text-[#607B96]' }>
                        { `// ${ project.shortDescription }` }
                    </Text>
                    <Container size={ '1' }>
                        <ScrollArea className={ 'max-h-48' }>
                            <Dialog.Description size={ '2' } className={ 'whitespace-pre-wrap pt-4' }>
                                <Text weight={ 'medium' } className={ 'text-[#bcdcfc]' }>
                                    { project.longDescription }
                                </Text>
                            </Dialog.Description>
                        </ScrollArea>
                    </Container>
                    <Flex direction={{ initial: 'column', sm: 'row' }} gap={ '3' } mt={ '5' }>
                        <Button asChild variant={ 'outline' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={{ initial: '3', sm: '4' }}>
                            <Link href={ project.liveLink }>
                                Live Deployment
                            </Link>
                        </Button>
                        <Button asChild variant={ 'soft' } className={ 'transition-all sm:flex-1 cursor-pointer' } size={{ initial: '3', sm: '4' }}>
                            <Link href={ project.githubLink }>
                                GitHub
                            </Link>
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
            <Flex gap={ '2' }>
                { project.technologies.map((technology, index) => {
                    
                    const IconComponent = TECHNOLOGIES[technology];

                    return (
                        <Tooltip key={ index } content={ technology } className={ 'bg-[--orange-11]' }>
                            <Box>
                                <IconComponent size={ '1.5rem' } className={ 'text-[--orange-11]' } />
                            </Box>
                        </Tooltip>
                    );
                }) }
            </Flex>
        </Flex>
    );
}