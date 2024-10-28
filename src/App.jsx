/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react'
import Page1 from './components/Page1';

const App = () => {
    return (
    <div className="w-screen h-screen bg-black text-white relative">
        <Page1 />
    </div>
    )
}

export default App
