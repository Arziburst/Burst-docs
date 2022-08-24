// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    children: React.ReactNode
}

export const ContainerCenter: FC<PropTypes> = ({ children }) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
};
