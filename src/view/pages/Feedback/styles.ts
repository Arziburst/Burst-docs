// Core
import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContainerContent = styled.div`
    width: 100%;
    max-width: 500px;
    
    @media (min-width: 992px) {
        max-width: 800px;
    }
`;

export const Title = styled.h2`
    font-size: 36px;
    text-align: center;
    ${({ theme }) => ({
        color:      theme.fontColor.primary,
        fontFamily: theme.fontFamily.primary,
    })}
`;

const gap = '20px';
export const ContainerBody = styled.div`
    margin-top: ${gap};
    margin-bottom: ${gap};
`;

export const ContainerAuthors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
