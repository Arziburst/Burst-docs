// Core
import React, { createContext, FC, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Routes
import { Routes } from './routes';

// Components
import { Header, SideBar } from './components';

// Container
import { ContainerScrollbar } from './containers';

// Types
type TypesContextApp = {
    refs: {
        current: Array<HTMLElement> | []
    } | null
};

interface TypesContainer extends React.HTMLAttributes<HTMLDivElement> {}

// Styles
const AppContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

const Container = styled.div<TypesContainer>`
    display: grid;
    grid-template-rows: calc(100vh - 69px);
    
    @media (min-width: 992px) {
        grid-template-columns: 300px 1fr;
    }
`;
const ContainerMain = styled.main`
    padding: 20px;

    @media (min-width: 576px) {
        padding: 30px;
    }
    @media (min-width: 992px) {
        padding: 40px
    }
`;

export const ContextApp = createContext<TypesContextApp>({ refs: null });

export const App: FC = () => {
    const refs = useRef([]);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <ContextApp.Provider value = {{ refs: refs }}>
                <AppContainer>
                    <GlobalStyles />
                    <Header />
                    <Container>
                        <SideBar />
                        <ContainerScrollbar>
                            <ContainerMain>
                                <Routes />
                            </ContainerMain>
                        </ContainerScrollbar>
                    </Container>
                </AppContainer>
            </ContextApp.Provider>
        </ThemeProvider>
    );
};
