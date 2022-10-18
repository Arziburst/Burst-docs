// Core
import styled from 'styled-components';

// Styles
import { stylesScroll } from '../../containers/ContainerScrollbar/styles';

export const Container = styled.div`
    width: 100%;

    & * {
        font-size: 18px;
    }
    .react-autosuggest__container {
        position: relative;
        z-index: 1;

        & .react-autosuggest__container {
            height: 100%;
        }
        & .react-autosuggest__input {
            padding: 10px;
            width: 100%;
            font-family: ${({ theme }) => theme.fontFamily.primary};
            border: 1px solid ${({ theme }) => theme.search.color.primary};
            border-radius: ${({ theme }) => theme.app.borderRadius.primary};

            &:hover, &:focus {
                border-color: ${({ theme }) => theme.search.hover.primary};
            }
        }
        & .react-autosuggest__suggestions-container {
            width: auto;
            background-color: ${({ theme }) => theme.app.color.primary};
            
            &.react-autosuggest__suggestions-container--open {
                position: absolute;
                width: 100%;
                max-height: 70vh;
                padding: 5px;
                box-shadow: 0 4px 2.4rem -0.4rem #9da5ab;
                border-radius: ${({ theme }) => theme.app.borderRadius.primary};
                ${stylesScroll}
            }
            
            & .react-autosuggest__suggestion {
                padding: 10px 20px;

                &--highlighted {
                    cursor: pointer;
                    background-color: ${({ theme }) => theme.search.itemColor.active};
                   
                    &:active p {
                        color: ${({ theme }) => theme.search.fontColor.click};
                    } 
                }
            }
        }
    }
    .react-autosuggest__section-container {
        border-top: 3px dashed #9da5ab;
        
        &--first {
            border-top: none;
        }
    }
`;

export const TitleSuggestion = styled.p`
    font-size: 22px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.search.fontColor.primary};
    `;
export const TextSuggestion = styled.p`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.search.fontColor.primary};
`;
