// Core
import styled from 'styled-components';

// Elements
import { IconMenu as EIconMenu } from '../../elements';

// Types
type PropTypes = {
    animationDelay: string
}

const gap = '16px';

export const ContainerHeader = styled.div`
    padding: 0px 10px;

    @media (min-width: 576px) {
        padding: 0px 20px;
    }
    @media (min-width: 992px) {
        padding: 0px 40px
    }
`;

export const Header = styled.header`
    z-index: 1;
    padding: 8px 16px;
    box-shadow: 0 0 2.25rem #9da5ab;
    background-color: ${({ theme }) => theme.app.color.primary};
`;
export const ContainerContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
export const ContainerLogos = styled.div`
    display: flex;
    align-items: center;
    gap: calc(${gap} / 2);
    
    @media (min-width: 360px) {
        gap: ${gap};
    }
`;

export const IconMenu = styled(EIconMenu)`
    @media (min-width: 992px) {
        display: none;
    }
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
    padding-right: calc(${gap} / 2);
    border-right: 2px solid grey;
    
    @media (min-width: 360px) {
        padding-right: ${gap};
    }
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
