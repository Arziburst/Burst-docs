// Core
import styled from 'styled-components';

// Types
interface TypesContainer extends React.HTMLAttributes<HTMLDivElement> {}

type TypesDarkArea = {
    isOpenSidebar: boolean
}

export const AppContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

export const Container = styled.div<TypesContainer>`
    display: grid;
    grid-template-rows: calc(100vh - 69px);
    
    @media (min-width: 992px) {
        grid-template-columns: 300px 1fr;
    }
`;

export const ContainerMain = styled.main`
    padding: 20px;

    @media (min-width: 576px) {
        padding: 30px;
    }
    @media (min-width: 992px) {
        padding: 40px
    }
`;
export const DarkArea = styled.div<TypesDarkArea>`
    ${({ isOpenSidebar }) => isOpenSidebar && {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height:          '100%',
        width:           '100%',
        zIndex:          '1',
        position:        'absolute',
        top:             '50%',
        left:            '50%',
        transform:       'translate(-50%, -50%)',
    }}
`;
