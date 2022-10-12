// Core
import styled from 'styled-components';

export const AppContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    background-color: ${({ theme }) => theme.app.color.secondary};
`;

