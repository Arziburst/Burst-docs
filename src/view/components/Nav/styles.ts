// Core
import styled from 'styled-components';

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.sidebar.color.primary};
`;

export const ContainerSearch = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const Ul = styled.ul`
    padding: 24px;

    & > li:not(:last-child) {
        margin-bottom: 20px;
    }
`;
