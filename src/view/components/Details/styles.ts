// Core
import styled from 'styled-components';

// Types
interface PropTypesMarker extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    isActive: boolean
    wasOpen: boolean
}

export const Marker = styled.div<PropTypesMarker>`

    @keyframes animationOpenDetailsBefore {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
    }

    @keyframes animationOpenDetailsAfter {
        0% {
            transform: translate(-50%, -50%) rotate(90deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
    }

    @keyframes animationCloseDetailsBefore {
        0% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
    }
    @keyframes animationCloseDetailsAfter {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(90deg);
        }
    }

    & {
        margin-right: 10px;
        position: relative;
        cursor: pointer;
        width: 24px;
        height: 24px;
    }
    
    &:hover::after, &:hover::before {
        background-color: ${({ theme }) => theme.sidebar.fontColor.hover};
    }

    &::before, &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${({ theme, isActive }) => isActive ? theme.sidebar.fontColor.active : theme.sidebar.fontColor.close};
    }

    &::before {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    &::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    ${({ isOpen }) => isOpen === true && {
        [ '&::before' ]: {
            transform:         'translate(-50%, -50%) rotate(0deg)',
            animationName:     'animationOpenDetailsBefore',
            animationDuration: '0.3s',
        },
        [ '&::after' ]: {
            transform:         'translate(-50%, -50%) rotate(0deg)',
            animationName:     'animationOpenDetailsAfter',
            animationDuration: '0.3s',
        },
    }}

    ${({ isOpen, wasOpen }) => isOpen === false && wasOpen && {
        [ '&::before' ]: {
            transform:         'translate(-50%, -50%) rotate(180deg)',
            animationName:     'animationCloseDetailsBefore',
            animationDuration: '0.3s',
        },
        [ '&::after' ]: {
            transform:         'translate(-50%, -50%) rotate(90deg)',
            animationName:     'animationCloseDetailsAfter',
            animationDuration: '0.3s',
        },
    }}
`;

export const Title = styled.li`
    display: flex;
    align-items: center;
`;

export const Body = styled.ul`
    margin-left: 50px;
    display: flex;
    flex-direction: column;

    & > li:first-child {
        margin-top: 10px;
    }
    & > li:not(:last-child) {
        margin-bottom: 10px;
    }
`;
