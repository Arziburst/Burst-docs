// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

type PropTypes = {
    children: React.ReactNode
}

export const ContainerHoverScale: FC<PropTypes> = ({ children }) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
};
