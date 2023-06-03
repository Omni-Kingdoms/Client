'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './style.css';

export const Player = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [isShow, setIsShow] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        if (isShow) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    return (
        <div>
            <div className='omni-player-point'>
                <Image className='w-20 h-[70px]' src={require('../../assets/img/hero.png')} alt='hero' />
                <div className='flex justify-center'>
                    <input className='hidden' type="checkbox" id="omni-player-toggle" name="omni-player-toggle" checked={isShow} onChange={e => setIsShow(e.target.checked)}/>
                    <label htmlFor="omni-player-toggle" className='mt-10 text-center cursor-pointer omni-player-hero'>Lion</label>
                </div>
            </div>
            <div className='omni-player-content' style={{display: isShow ? 'block' : 'none'}} ref={drawerRef}>
                
            </div>
        </div>
    )
}