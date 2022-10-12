// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
    /* type props here */
}

export const Wrapper: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <S.Container { ...props }>
            {children}
        </S.Container>
    );
};
