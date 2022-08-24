// Core
import React, { createContext, FC, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Bus
import { useTogglesRedux } from '../bus/client/toggles';

// Routes
import { Routes } from './routes';

// Components
import { Header, SideBar } from './components';

// Container
import { ContainerScrollbar } from './containers';

// Styles
import * as S from './styles';

// Types
type TypesContextApp = {
    refs: {
        current: Array<HTMLElement> | []
    } | null
};


export const ContextApp = createContext<TypesContextApp>({ refs: null });

export const App: FC = () => {
    const { togglesRedux, setToggleAction } = useTogglesRedux();
    const refs = useRef([]);


    return (
        <ThemeProvider theme = { defaultTheme }>
            <ContextApp.Provider value = {{ refs: refs }}>
                <S.AppContainer>
                    <GlobalStyles />
                    <Header />
                    <S.Container>
                        <SideBar />
                        <ContainerScrollbar style = {{ position: 'relative' }}>
                            <S.DarkArea
                                isOpenSidebar = { togglesRedux.isOpenSidebar }
                                onClick = { () => setToggleAction({ type: 'isOpenSidebar', value: false }) }
                            />
                            <S.ContainerMain>
                                <Routes />
                            </S.ContainerMain>
                        </ContainerScrollbar>
                    </S.Container>
                </S.AppContainer>
            </ContextApp.Provider>
        </ThemeProvider>
    );
};
