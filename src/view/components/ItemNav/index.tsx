// Core
import React, { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

// Types
type PropTypes = {
    children: ReactNode;
    to: string
    onclick?: Function
    variant: 'h2' | 'h3'
    define?: boolean | undefined
    title?: string
}

export const ItemNav: FC<PropTypes> = ({ children, onclick, variant, to, define, ...props }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const defineVariantTagText = (variant: PropTypes['variant'], children: PropTypes['children']) => {
        if (variant === 'h2') {
            return (
                <S.ContainerH2>
                    {children}
                </S.ContainerH2>
            );
        }

        return (
            <S.ContainerH3>
                {children}
            </S.ContainerH3>
        );
    };

    return (
        <S.ButtonStyled
            isActive = { define && (pathname === `${to}`) }
            onClick = { () => {
                navigate(to);
                onclick && onclick();
            } }
            { ...props }>
            {defineVariantTagText(variant, children)}
        </S.ButtonStyled>
    );
};
