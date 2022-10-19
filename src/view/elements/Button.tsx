// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary'
    to?: string
}

// Styles
const ButtonStyled = styled.button<PropTypes>`
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    border: none;
    cursor: pointer;
`;

const ButtonPrimaryStyled = styled.button<PropTypes>`
    background-color: transparent;
    margin: 0px;
    border: none;
    cursor: pointer;
    
    background-color: ${({ theme }) => theme.button.primary.backgroundColor.primary};
    border-radius: ${({ theme }) => theme.app.borderRadius.primary};
    padding: 15px 20px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.button.primary.fontColor.primary};
    
    &:hover, &:focus {
        background-color: ${({ theme }) => theme.button.primary.backgroundColor.hover};
        color: ${({ theme }) => theme.button.primary.fontColor.hover};
    }
    &:active {
        background-color: ${({ theme }) => theme.button.primary.backgroundColor.click};
        color: ${({ theme }) => theme.button.primary.fontColor.click};
    }
`;

export const Button: FC<PropTypes> = ({ children, variant, ...props }) => {
    if (variant === 'primary') {
        return (
            <ButtonPrimaryStyled
                { ...props }>
                {children}
            </ButtonPrimaryStyled>
        );
    }

    return (
        <ButtonStyled
            { ...props }>
            {children}
        </ButtonStyled>
    );
};
