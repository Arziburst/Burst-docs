// Core
import React, { createContext, FC, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { animated, config, useTransition } from 'react-spring';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Bus
import { useTogglesRedux } from '../bus/client/toggles';

// Routes
import { Routes } from './routes';

// Components
import { Header, Nav, SideBar } from './components';

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
    const refs = useRef([]);

    const { togglesRedux, setToggleAction } = useTogglesRedux();

    const transitions = useTransition(togglesRedux.isOpenSidebar, {
        from:   { opacity: 0 },
        enter:  { opacity: 1 },
        leave:  { opacity: 0 },
        config: config.slow,
    });

    const SDarkAreaAnimated = animated(S.DarkArea);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <ContextApp.Provider value = {{ refs: refs }}>
                <S.AppContainer>
                    <GlobalStyles />
                    <Header />
                    <S.Container>
                        <S.ContainerNav>
                            <Nav />
                        </S.ContainerNav>
                        <ContainerScrollbar style = {{ position: 'relative' }}>
                            {transitions(
                                (styles, item) => item && (
                                    <SDarkAreaAnimated
                                        style = { styles }
                                        onClick = { () => setToggleAction({ type: 'isOpenSidebar', value: false }) }
                                    />),
                            )}
                            <S.ContainerMain>
                                <Routes />
                            </S.ContainerMain>
                            <SideBar />
                        </ContainerScrollbar>
                    </S.Container>
                </S.AppContainer>
            </ContextApp.Provider>
        </ThemeProvider>
    );
};
