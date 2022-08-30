// Core
import styled from 'styled-components';

// Components
import { Button } from '../../elements';

// Types
interface PropTypesContainer {
    isActive?: boolean
}

export const ContainerH2 = styled.h2`
    display: inline;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 24px;
`;
export const ContainerH3 = styled.h2`
    display: inline;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 18px;
`;

export const ButtonStyled = styled(Button)<PropTypesContainer>`
    text-align: left;
    color: ${({ isActive, theme }) => isActive === true ? theme.sidebar.fontColor.active : theme.fontColor.primary};

    &:hover, &:focus {
        color: ${({ theme }) => theme.sidebar.fontColor.hover};
    }
    &:active {
        color: ${({ theme }) => theme.sidebar.fontColor.click};
    }
`;
