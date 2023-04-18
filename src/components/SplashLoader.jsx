import React from 'react';
import { logo } from '../assets';

function Preloader() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-700'>
            <img src={logo} alt='logo' className='w-40 h-40 animate-pulse' />
        </div>
    );
}

export default Preloader;
