// Core
import React, { FC } from 'react';
import styled from 'styled-components';

interface PropTypes extends React.HTMLAttributes<HTMLButtonElement> {
    isOpen: boolean
}

const Button = styled.button<PropTypes>`
    padding: 0px;
    border: none;
    background: transparent;
    
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    
    & span {
        background-color: ${({ theme }) => theme.burgerMenu.open};
        height: 5px;
        position: absolute;
        width: 100%;
        left: 0;
        transition: all 0.3s ease;
    }
    & span:first-child {
        top: 0;
    }
    & span:nth-child(2) {
        top: 50%;
        transform: translate(0%, -50%);
    }
    & span:last-child {
        bottom: 0;
    }

    ${({ isOpen, theme }) => isOpen && {
        [ '& span:nth-child(2)' ]: {
            opacity: 0,
        },
        [ '& span:first-child, & span:last-child' ]: {
            top:             '50%',
            transform:       'translate(0%, -50%)',
            backgroundColor: theme.burgerMenu.close,
        },
        [ '& span:first-child' ]: {
            transform: 'rotate(45deg)',
        },
        [ '& span:last-child' ]: {
            transform: 'rotate(-45deg)',

        },
    }}
`;

export const IconMenu: FC<PropTypes> = ({ ...props }) => {
    return (
        <Button
            { ...props }>
            <span></span>
            <span></span>
            <span></span>
        </Button>
    );
};
