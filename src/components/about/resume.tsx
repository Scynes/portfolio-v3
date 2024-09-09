
import { Flex } from '@radix-ui/themes';
import { pdfjs, Document, Page } from 'react-pdf';

export const Resume = () => {

    // Set the workerSrc for pdf.js
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    return (
        <Document file={ '/files/resume.pdf' }>
            <Flex direction={ 'column' } gap={ '4' } className={ 'max-w-2xl' }>
                <Page pageNumber={1} className={ 'rounded-lg ovm ˚¬µ;,.erflow-hidden' } />
                <Page pageNumber={2} className={ 'rounded-lg overflow-hidden' } />
            </Flex>
        </Document>
    );
}
