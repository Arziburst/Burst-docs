// Core
import styled from 'styled-components';

// Containers
import { ContainerWithShadow, Wrapper } from '../../containers';

// Types
interface TypesContainer extends React.HTMLAttributes<HTMLElement> {}

export const Container = styled(Wrapper)<TypesContainer>`
    width: 100%;
`;
export const ContainerWithShadowStyled = styled(ContainerWithShadow)<TypesContainer>`
    padding: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.app.color.primary};
    
    @media (min-width: 992px) {
        padding: 40px;
    }
`;
