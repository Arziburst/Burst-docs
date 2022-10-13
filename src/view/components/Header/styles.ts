// Core
import styled from 'styled-components';

// Types
type PropTypes = {
    animationDelay: string
}

const gap = '16px';

export const ContainerHeader = styled.header`
    z-index: 100;
    padding: 8px 16px;
    box-shadow: 0 0 2.25rem #9da5ab;
    background-color: ${({ theme }) => theme.app.color.primary};
`;
export const ContainerContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    @media (min-width: 380px) {
        justify-content: space-between;
    }
`;
export const ContainerLogos = styled.div`
    display: flex;
    align-items: center;
    gap: ${gap};
`;

export const IconMenu = styled.div`
    display: flex;
    gap: ${gap};
`;

const AnimationBox = `
    @keyframes animationBox {
        98.5% {
            transform: scale(1);
        }
        99.5% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }
    & {
        animation-name: animationBox;
        animation-duration: 60s;
        animation-iteration-count: infinite;
    }
`;
export const ContainerLogo = styled.div`
    padding-right: ${gap};
    border-right: 2px solid grey;
`;

export const ImageStyled = styled.img<PropTypes>`
    ${AnimationBox}
    animation-delay: ${({ animationDelay }) => animationDelay};
    height: 50px;
`;

export const SvgStyled = styled.svg<PropTypes>`
    ${AnimationBox}
    animation-delay: ${({ animationDelay }) => animationDelay};
    display: flex;
    height: 30px;
`;

export const ContainerSearch = styled.div`
    display: none;

    @media (min-width: 992px) {
        display: block;
    }
`;

