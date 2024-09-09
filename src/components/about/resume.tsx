
import { Flex } from '@radix-ui/themes';
import { pdfjs, Document, Page } from 'react-pdf';

// Adding Promise type safety declarations
declare global {
  interface PromiseConstructor {
    withResolvers<T = unknown>(): {
      promise: Promise<T>;
      resolve: (value: T | PromiseLike<T>) => void;
      reject: (reason?: any) => void;
    };
  }
}

// Polyfill for Promise.withResolvers
if (typeof Promise.withResolvers === 'undefined') {
  (Promise as any).withResolvers = function () {
    let resolve: (value: unknown) => void;
    let reject: (reason?: any) => void;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve: resolve!, reject: reject! };
  };
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

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
