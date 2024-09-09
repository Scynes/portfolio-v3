import { Flex } from '@radix-ui/themes';

export const Resume = () => {

    return (
        <Flex className={ 'max-w-3xl max-h-full h-full w-full' }>
            <object data="/files/resume.pdf" type="application/pdf" className='w-full'>
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </Flex>
    );
}
