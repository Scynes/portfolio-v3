'use client';

import { Dropdown } from '@/components/dropdown';
import { Box, Button, Code, Flex, Grid, Text, TextArea, TextField } from '@radix-ui/themes';
import { RxCross2 } from 'react-icons/rx';
import { FaEnvelope, FaPhoneFlip } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Separator } from '@/components/separator';
import { useState } from 'react';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Page () {

    const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: event.target.value });
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, email: event.target.value });
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, message: event.target.value });
    }

    return (
        <Grid columns={{ initial: '1fr', sm: '14rem 1fr' }} rows={{ initial: 'auto auto', sm: 'auto' }} className={ 'relative pt-[47px] w-full h-full max-h-[calc(100dvh-43px)]' }>
            <Flex className={ 'border-r border-[rgb(30,45,61)] bg-[--sky-2]' } direction={ 'column' }>
                <Dropdown title={ 'contacts' } expanded>
                    <Flex direction={ 'column' } gap={ '2' }>
                        <Flex gap={ '2' }>
                            <FaEnvelope size={ '1rem' } color={ '#607B96' } />
                            <Text size={ '1' } className={ 'text-[#607B96]' }>Email Address</Text>
                        </Flex>
                        <Flex gap={ '2' }>
                            <FaPhoneFlip size={ '1rem' } color={ '#607B96' } />
                            <Text size={ '1' } className={ 'text-[#607B96]' }>Phone Number</Text>
                        </Flex>
                    </Flex>
                </Dropdown>
                <Dropdown title={ 'socials' } expanded>
                    <Flex direction={ 'column' } gap={ '2' }>
                        <Flex gap={ '2' }>
                            <FaExternalLinkAlt size={ '1rem' } color={ '#607B96' } />
                            <Text size={ '1' } className={ 'text-[#607B96]' }>LinkedIn Profile</Text>
                        </Flex>
                        <Flex gap={ '2' }>
                            <FaExternalLinkAlt size={ '1rem' } color={ '#607B96' } />
                            <Text size={ '1' } className={ 'text-[#607B96]' }>GitHub Page</Text>
                        </Flex>
                    </Flex>
                </Dropdown>
            </Flex>
            <Flex className={ 'overflow-y-scroll flex-1' } justify={ 'center' } direction={ 'column' }>
                <Flex className={ 'min-h-9 border-b border-[#1E2D3D]' }>
                    <Flex className={ `px-4 border-r border-[#1E2D3D] h-full` } align={ 'center' } gap={ '4' }>
                        <Text size={ '1' } className={ 'text-[--orange-11]' }>
                            contact();
                        </Text>
                        <Box className={ 'rounded-full p-[2px] hover:bg-[#232d36] cursor-pointer' }>
                            <RxCross2 size={ '0.75rem' } className={ '' } color={ '#607B96' } />
                        </Box>
                    </Flex>
                </Flex>
                <Grid columns={{ initial: '1fr', md: '1fr auto 1fr' }} rows={{ initial: 'auto auto', md: 'auto' }} className={ 'h-auto sm:h-full overflow-y-scroll' }>
                    <Flex className={ 'flex-1' } direction={ 'column' } justify={ 'center' } align={ 'center' } p={ '4' }>
                        <Flex direction={ 'column' } className={ 'max-w-[30rem] w-full' } gap={ '4' }>
                            <TextField.Root onChange={ handleNameChange } placeholder={ '_name' } size={ '3' } />
                            <TextField.Root onChange={ handleEmailChange } placeholder={ '_email' } size={ '3' } />
                            <TextArea onChange={ handleMessageChange } placeholder={ '_message' } size={ '3' } className={ 'min-h-52' } />
                            <Button variant='outline' size={ '3' }>submit-message</Button>
                        </Flex>
                    </Flex>
                    <Separator orientation={ 'vertical' } />
                    <Flex asChild className={ 'flex-1 !bg-[--color-panel]' } align={ 'center' } justify={ 'center' }>
                        <SyntaxHighlighter language={ 'javascript' } style={ a11yDark } className={ 'h-fit w-full sm:h-full md:!p-8' } wrapLongLines>
                            {`const name = "${ formData.name }"\n\nconst email = "${ formData.email }";\n\nconst message = "${ formData.message }";\n\nconst handleSubmit = async () => { \n    await submitForm(name, email, message);\n});`}
                        </SyntaxHighlighter>
                    </Flex>
                </Grid>
            </Flex>
        </Grid>
    )
}