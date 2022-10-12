// Core
import styled from 'styled-components';

// Types
interface TypesContainer extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = styled.div<TypesContainer>`
    display: grid;
    grid-template-rows: calc(100vh - 69px);
    background-color: ${({ theme }) => theme.app.primary};
    
    @media (min-width: 992px) {
        grid-template-columns: 300px 1fr;
    }
`;

export const ContainerNav = styled.div`
    display: none;
    
    @media (min-width: 992px) {
        display: block;
    }
`;

export const DarkArea = styled.div`
        background-color: ${({ theme }) => theme.darkArea};
        height:          100%;
        width:           100%;
        position:        absolute;
        top:             50%;
        left:            50%;
        transform:       translate(-50%, -50%);
`;

export const ContainerMain = styled.main`
    height: 100%;
    padding: 20px;

    @media (min-width: 576px) {
        padding: 30px;
    }
    @media (min-width: 992px) {
        padding: 40px
    }
`;

