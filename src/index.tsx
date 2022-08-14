// Core
import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// Routes
import { Routes } from './view/routes';

// Assets
import { GlobalStyles, defaultTheme } from './assets';

// Styles
const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

const BurstDocs: FC = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <AppContainer>
                    <Routes />
                </AppContainer>
            </ThemeProvider>
        </MemoryRouter>
    );
};

export const RenderDocsWithIframe = () => {
    const iFrame = document.createElement('iframe');
    iFrame.setAttribute('id', 'iframe-burst-docs');
    document.body.appendChild(iFrame);
    const iFrameBody = iFrame?.contentDocument?.body;

    const container = document.createElement('div');
    container.setAttribute('id', 'burst-docs');

    iFrameBody?.appendChild(container);

    if (container) {
        const root = createRoot(container);
        root.render(<BurstDocs />);
    }
};

if (process.env.NODE_ENV === 'development') {
    RenderDocsWithIframe();
}

try {
    exports.RenderDocsWithIframe = RenderDocsWithIframe;
} catch (error) {} // eslint-disable-line no-empty

