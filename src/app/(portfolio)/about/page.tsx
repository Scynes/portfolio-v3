'use client';

import { Dropdown } from '@/components/dropdown';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { PersonalInfo } from '@/components/personal-info';
import { FaEnvelope, FaPhoneFlip } from 'react-icons/fa6';
import { Document, Page as PDFPage, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


// Set the workerSrc for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString();

export default function Page () {

    const [ selectedInfo, setSelectedInfo ] = useState<string>('about-me');

    return (
        <Grid columns={{ initial: '1fr', sm: '14rem 1fr' }} rows={{ initial: 'auto 1fr', sm: 'auto' }} className={ 'relative pt-[47px] w-full h-full max-h-[calc(100dvh-43px)]' }>
            <Flex className={ 'border-r border-[rgb(30,45,61)] bg-[--sky-2]' } direction={ 'column' }>
                <Dropdown title={ 'personal-info' } expanded>
                    <Flex direction={ 'column' } gap={ '4' }>
                        <PersonalInfo title={ 'about-me' } onClick={ () => setSelectedInfo('about-me') } colorClass={ 'text-[--tomato-11]' } selected={ selectedInfo == 'about-me' }/>
                        <PersonalInfo title={ 'interests' } onClick={ () => setSelectedInfo('interests') } colorClass={ 'text-[--mint-11]' } selected={ selectedInfo == 'interests' }/>
                        <PersonalInfo title={ 'resume' } onClick={ () => setSelectedInfo('resume') } colorClass={ 'text-[--amber-11]' } selected={ selectedInfo == 'resume' }/>
                    </Flex>
                </Dropdown>
                <Dropdown title={ 'contacts' }>
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
            </Flex>
            <Flex className={ 'overflow-y-scroll flex-1' } justify={ 'center' } direction={ 'column' }>
                <Flex className={ 'min-h-9 border-b border-[#1E2D3D]' }>
                    <Flex className={ `px-4 border-r border-[#1E2D3D] h-full` } align={ 'center' } gap={ '4' }>
                        <Text size={ '1' } className={ 'text-[--orange-11]' }>
                            <span className={ 'text-[--indigo-11]' }>let </span>
                            <span className={ 'text-[--jade-11] font-medium' }>selectedInfo = </span>
                            <span>
                                { `"${ selectedInfo }";` }
                            </span>
                        </Text>
                        <Box className={ 'rounded-full p-[2px] hover:bg-[#232d36] cursor-pointer' }>
                            <RxCross2 size={ '0.75rem' } className={ '' } onClick={ () => setSelectedInfo('about-me') } color={ '#607B96' } />
                        </Box>
                    </Flex>
                </Flex>
                <Flex wrap={ 'wrap'} justify={ 'center' } gap={ '8' } px={ '4' } py={ '8' } className={ 'flex-1 h-full overflow-y-scroll self-center max-w-7xl no-scrollbar' }>
                <Document file={ '/files/resume.pdf' }>
                    <Flex direction={ 'column' } gap={ '4' } className={ 'max-w-2xl' }>
                        <PDFPage pageNumber={1} />
                        <PDFPage pageNumber={2} />
                    </Flex>
                </Document>
                </Flex>
            </Flex>
        </Grid>
    )
}