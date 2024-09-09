import { Flex } from '@radix-ui/themes';

export const Resume = () => {

    return (
        <Flex className={ 'max-w-3xl max-h-full h-full w-full' }>
            <object data="https://dustinjs.dev/files/resume.pdf" type="application/pdf" className='w-full'>
                <p>An error occurred, please view my resume here - <a href="http://africau.edu/images/default/sample.pdf">resume link!</a></p>
            </object>
        </Flex>
    );
}
