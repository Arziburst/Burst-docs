// Core
import styled from 'styled-components';

export const Container = styled.nav`
    height: calc(100vh - 69px);
    background-color: white;
`;

export const Ul = styled.ul`
    padding: 24px;

    & > li:not(:last-child) {
        margin-bottom: 20px;
    }
`;

