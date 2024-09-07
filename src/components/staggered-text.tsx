'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const StaggeredText = ({ text }: { text: string }) => {

    const AnimationProps = {
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 20 },
    };

    return (
        <motion.span arial-hidden={ "true" } initial={ "initial" } animate={ "animate" } transition={{ staggerChildren: 0.05 }}>
            { text.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                    { word.split("").map((letter, index) => (
                        <motion.span className={ "inline-block" } key={ index } variants={ AnimationProps }>
                            {letter}
                        </motion.span>
                    )) }
                    <motion.span className={ "inline-block" } key={ index } variants={ AnimationProps }>
                        &nbsp;
                    </motion.span>
                </React.Fragment>
            )) }
        </motion.span>
    );
}