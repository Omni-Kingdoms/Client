'use client'

import React from 'react';
import './style.css';

interface ButtonProps {
    type?: 'default' | 'primary',
    className?: string,
    children?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
    type, 
    className, 
    children, 
    onClick
}: ButtonProps) => {
    return (
        <button className={[className, 'omni-btn', `omni-btn-${type}`].join(' ')} onClick={onClick}>
            {children}
        </button>
    );
};