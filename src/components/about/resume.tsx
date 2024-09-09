import { Flex } from '@radix-ui/themes';

export const Resume = () => {

    return (
        <Flex className={ 'max-w-3xl max-h-full h-full w-full' }>
            <iframe src="/files/resume.pdf" width="100%" height="100%" style={{ minHeight: '100vh' }}>
                <p>Error, please directly view the resume here - <a href="/files/resume.pdf">resume!</a></p>
            </iframe>
        </Flex>
    );
}
