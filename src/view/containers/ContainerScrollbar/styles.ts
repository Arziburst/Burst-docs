// Core
import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: auto;

    ::-webkit-scrollbar {
         width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.scrollbar.primary}; 
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.scrollbar.hover}; 
    }
`;
