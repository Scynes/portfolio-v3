'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

export const StaggeredText = ({ children, delay }: { children: ReactNode | string, delay: number }) => {
    
    const AnimationProps = (index: number) => ({ 
        initial: { opacity: 0, y: -30 }, 
        animate: { opacity: 1, y: 0 }, 
        transition: { delay: delay + index * 0.025 } 
    });

    const lettersArray = typeof children === 'string' ? children.split('') : React.Children.toArray(children);

    return (
        <span aria-hidden={ 'true' }>
            { lettersArray.map((child, index) => (
                <motion.span className={ 'inline-block' } key={ index } { ...AnimationProps(index) } style={{ whiteSpace: 'pre' }}>
                    { typeof child === 'string' ? (child === ' ' ? '\u00A0' : child) : child }
                </motion.span>
            )) }
        </span>
    );
}
