// Core
import React, { createContext, FC, MutableRefObject, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Routers
import { Routes } from './routes';

// Components
import { Header } from './components';

// Styles
import * as S from './styles';

// Types
type TypesContextApp = {
    refs: {
        current: Array<HTMLElement> | []
    } | null
    refHeader: MutableRefObject<HTMLDivElement | null> | null
};

export const ContextApp = createContext<TypesContextApp>({ refs: null, refHeader: null });

export const App: FC = () => {
    const refs = useRef([]);
    const refHeader = useRef(null);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <ContextApp.Provider value = {{ refs: refs, refHeader: refHeader }}>
                <S.AppContainer>
                    <GlobalStyles />
                    <Header />
                    <Routes />
                </S.AppContainer>
            </ContextApp.Provider>
        </ThemeProvider>
    );
};
