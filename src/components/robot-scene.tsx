'use server';

import Spline from '@splinetool/react-spline/next';

export const RobotScene = () => {
    return <Spline scene={ "/scene.splinecode" } className={ 'absolute ml-72 w-full' } />
}