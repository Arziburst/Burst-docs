// Core
import styled from 'styled-components';

// Theme
import { defaultTheme } from '../../../assets';

export const stylesScroll = `
    overflow-y: auto;

    ::-webkit-scrollbar {
            width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${defaultTheme.scrollbar.primary}; 
        border-radius: ${defaultTheme.app.borderRadius.primary};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${defaultTheme.scrollbar.hover}; 
    }
`;

export const Container = styled.div`
    ${stylesScroll}
`;
