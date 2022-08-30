// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {}

export const ContainerCenter: FC<PropTypes> = ({ children }) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
};
