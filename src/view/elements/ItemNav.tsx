// Core
import React, { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Types
type PropTypes = {
    children: ReactNode;
    to: string
    onclick?: Function
    title?: string
}
interface PropTypesContainer {
    isActive: boolean
}

// Styles
const Container = styled.h2<PropTypesContainer>`
    display: inline;
    color: ${({ isActive, theme }) => isActive === true ? theme.fontColor.active : theme.fontColor.primary};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 24px;
    cursor: pointer;
    &:hover, &:focus {
        color: ${({ theme }) => theme.fontColor.hover};
    }
`;

export const ItemNav: FC<PropTypes> = ({ children, onclick, to, ...props }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Container
            isActive = { (pathname === `${to}`) }
            onClick = { () => {
                navigate(to);
                onclick && onclick();
            } }
            { ...props }>
            {children}
        </Container>
    );
};
