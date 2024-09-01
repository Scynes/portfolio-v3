import { Box, Heading, Separator } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

export const TopBarLink = ({ title, href }: { title: string, href: string }) => {

    const PATH_NAME = usePathname();

    return (
        <>
            <Link href={ href }>
                <Box className={ 'py-3 px-7 relative' }>
                    <Heading weight={ 'regular' } size={ '3' } className={ `text-[#607B96] ${ PATH_NAME == href && 'text-white' }` }>
                        { title }
                    </Heading>
                    <Box className={ `transition-all absolute h-1 w-0 ${ PATH_NAME == href && '!w-full' } bg-[--orange-11] left-0 bottom-0` } />
                </Box>
            </Link>
            <Separator orientation={ 'vertical' } size={ '2' } className={ 'bg-[#1E2D3D]' }/>
        </>
    );
}