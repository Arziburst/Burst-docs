// Core
import styled from 'styled-components';

// Types
type PropTypesContainer = {
    isOpenSidebar: boolean
}

let wasOpen = false;

export const Container = styled.nav<PropTypesContainer>`
    height: calc(100vh - 69px);
    position: fixed;
    background-color: white;
    z-index: 99;
    width: 300px;
    
    transform: translate(-110%, 0%);
    
    @media (min-width: 992px) {
        transform: translate(0%, 0%);
    }


    @keyframes animationOpenSidebar {
        0% {
            transform: translate(-110%, 0%);
        }
        100% {
            transform: translate(0%, 0%);
        }
    }
    @keyframes animationCloseSidebar {
        0% {
            display: block;
            transform: translate(0%, 0%);
        }
        100% {
            display: block;
            transform: translate(-110%, 0%);
        }
    }

    animation-duration: 0.3s;
    
${
    ({ isOpenSidebar }) => {
        if (isOpenSidebar === true) {
            wasOpen = true;

            return {
                display:       'block',
                animationName: 'animationOpenSidebar',
                transform:     'translate(0%, 0%)',
            };
        }
        if (isOpenSidebar === false && wasOpen === true) {
            return {
                animationName: 'animationCloseSidebar',
                transform:     'translate(-110%, 0%)',
            };
        }

        return {};
    }
}

    @media (min-width: 992px) {
        width: auto;
        opacity: 1;
        position: static;
        display: block;
        transform: translate(0%, 0%);
    }
`;

export const Ul = styled.ul`
    padding: 24px;

    & li:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const SubtitleNav = styled.h3`
    margin: 10px 0px;
    margin-left: 30px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 18px;
    cursor: pointer;
    
    &:hover, &:focus {
        color: ${({ theme }) => theme.fontColor.hover};
    }
`;
