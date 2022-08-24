// Core
import styled from 'styled-components';

// Types
type PropTypesContainer = {
    isOpenSidebar: boolean
}
interface PropTypesDetails extends React.HTMLAttributes<HTMLDetailsElement> {
    isActive: boolean
}

let wasOpen = false;
let wasOpenDetails = false;

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

export const Details = styled.details<PropTypesDetails>`
    @keyframes animationOpenDetailsBefore {
        0% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);
        }
        100% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(180deg);
        }
    }
    @keyframes animationCloseDetailsBefore {
        0% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(180deg);
        }
        100% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);
        }
    }

    @keyframes animationOpenDetailsAfter {
        0% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(90deg);
        }
        100% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);
        }
    }
    @keyframes animationCloseDetailsAfter {
        0% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);
        }
        100% {
            transform: translate(calc(-100% - 6px) , -50%) rotate(90deg);
        }
    }

    & summary {
        margin-left: 20px;
        list-style-type: none;
        position: relative;
    }

    & summary::before, summary::after {
        position: absolute;
        top: 50%;
        left: 0%;
        content: "";
        width: 14px;
        height: 2px;
        background-color: ${({ theme, isActive }) => isActive ? theme.sidebar.detailsColor.active : theme.sidebar.detailsColor.close};
    }
    
    & summary::before {
        transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);

    ${() => {
        wasOpenDetails = true;
        if (wasOpenDetails) {
            return  {
                animationName:     'animationCloseDetailsBefore',
                animationDuration: '0.3s',
            };
        }

        return {};
    }}
    }
    & summary::after {
        /* position: absolute;
        top: 50%;
        left: 0%; */
        transform: translate(calc(-100% - 6px) , -50%) rotate(90deg);
        /* content: "";
        width: 14px;
        height: 2px;
        background-color: ${({ theme }) => theme.sidebar.detailsColor.close}; */

    ${() => {
        wasOpenDetails = true;
        if (wasOpenDetails) {
            return  {
                animationName:     'animationCloseDetailsAfter',
                animationDuration: '0.3s',
            };
        }

        return {};
    }}
    }

    &[open] summary::before {
        animation-name: animationOpenDetailsBefore;
        animation-duration: 0.3s;
        transform: translate(calc(-100% - 6px) , -50%) rotate(180deg);
    }
    &[open] summary::after {
        animation-name: animationOpenDetailsAfter;
        animation-duration: 0.3s;
        transform: translate(calc(-100% - 6px) , -50%) rotate(0deg);
    }
`;

export const SubtitleNav = styled.h3`
    margin: 10px 0px;
    margin-left: 30px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 18px;
    color: ${({ theme }) => theme.sidebar.fontColor.primary};
    cursor: pointer;
    
    &:hover, &:focus {
        color: ${({ theme }) => theme.sidebar.fontColor.hover};
    }
`;
