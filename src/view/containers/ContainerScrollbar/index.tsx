// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
}

export const ContainerScrollbar: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <S.Container { ...props }>
            {children}
        </S.Container>
    );
};
