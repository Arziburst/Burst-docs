// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import { ContainerCenter } from '../containers';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {}

// Styles
const SpinnerStyled = styled.div<PropTypes>`
        width: 200px;
        height: 200px;
        border-top: 20px solid ${({ theme }) => theme.spinner.color.primary};
        border-right: 20px solid transparent;
        border-radius: 50%;
        animation-name: spinner;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    & div {
        width: 20px;
        height: 20px;
        background-color: ${({ theme }) => theme.spinner.color.primary};
        border-radius: 50%;
        margin-left: 155px;
        margin-top: 8px;
    }
    @keyframes spinner{
        100%{
            transform: rotate(360deg);
        }
    }
`;

export const Spinner: FC<PropTypes> = ({ ...props }) => {
    return (
        <ContainerCenter style = {{ height: '100%' }}>
            <SpinnerStyled
                { ...props }>
                <div></div>
            </SpinnerStyled>
        </ContainerCenter>
    );
};
