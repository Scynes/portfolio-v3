import { Card, Flex, Inset } from '@radix-ui/themes';

import Image from 'next/image';

export const ProjectPreviewCard = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <Flex className='sm:min-w-[30rem]'>
            <Card size={ '5' } className='w-full h-fit'>
                <Inset clip={ 'padding-box' }>
                    <Image src={ `/${ imgSrc }` } alt={ 'placeholder' } width={ 500 } height={ 180 } className={ 'rounded-xl transition-all hover:scale-105' } />
                </Inset>
            </Card>
        </Flex>
    );
}