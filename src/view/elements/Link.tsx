// Core
import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Types
type PropTypes = {
    children: ReactNode;
    to: string
    onClick?: Function
    title?: string
}

export const Link: FC<PropTypes> = ({ children, title, onClick, to, ...props }) => {
    const navigate = useNavigate();

    return (
        <a
            title = { title }
            onClick = { (event) => {
                event.preventDefault();
                navigate(to);
                onClick && onClick();
            } }
            { ...props }>
            {children}
        </a>
    );
};
