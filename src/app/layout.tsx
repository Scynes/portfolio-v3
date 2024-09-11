import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Grid, Theme } from '@radix-ui/themes';
import { TopBar } from '@/components/navigation/top-bar';
import { Footer } from '@/components/footer/footer';

import Image from 'next/image';

import '@radix-ui/themes/styles.css';
import "./globals.css";

const inter = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code', });

export const metadata: Metadata = {
    title: "Dustin Portell | Portfolio",
    description: "My developer portfolio showcasing my projects, skills, and experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <meta property="og:image" content="https://dustinjs.dev/portfolio-og.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="A preview of Dustin Portell's portfolio." />
            <body className={ inter.variable }>
                <Theme appearance={ 'dark' } accentColor={ 'indigo' } className={ 'bg-[--sky-2]' }>
                    <TopBar />
                    <Grid rows={ '1fr auto' } className={ 'relative h-dvh overflow-y-scroll' }>
                        { children }
                        <Footer/>
                        <Image priority src={ '/background-blur.png' } alt={ 'hero' } fill className='object-cover sm:object-contain ml-0 md:pl-40 lg:pl-60 -z-50 animate-pulse'/>
                    </Grid>
                </Theme>
            </body>
        </html>
    );
}
