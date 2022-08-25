// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLButtonElement> {}

// Styles
const ButtonStyled = styled.button<PropTypes>`
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    border: none;
    cursor: pointer;
`;

export const Button: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <ButtonStyled
            { ...props }>
            {children}
        </ButtonStyled>
    );
};
