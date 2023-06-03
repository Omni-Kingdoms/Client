'use client'

import React from 'react';
import Image from 'next/image';
import './style.css';

interface CardProp {
    type?: 'default' | 'primary',
    children?: { content: string, date: string, image: string },
}

export const Card = ({
    type,
    children
}: CardProp) => {
    return (
        <div className='card-container flex flex-col justify-between'>
            <div className='card-image'>
                {
                    children?.image && <Image className='h-44 object-cover' src={children?.image} alt='card image' />
                }
            </div>
            <div className='card-content flex flex-col justify-between h-full'>
                <div className='card-text text-lg'>{children?.content}</div>
                <div className='card-date mt-5'>{children?.date}</div>
            </div>
        </div>
    )
}