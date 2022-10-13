// Core
import styled from 'styled-components';

export const Container = styled.div`
    & * {
        font-size: 18px;
    }
    .react-autosuggest__container {
        position: relative;

        & .react-autosuggest__container {
            height: 100%;
        }
        & .react-autosuggest__input {}
        & .react-autosuggest__suggestions-container {
            width: auto;
            background-color: ${({ theme }) => theme.app.color.primary};
            
            &.react-autosuggest__suggestions-container--open {
                position: absolute;
                width: 100%;
                padding: 5px;
                box-shadow: 0 4px 2.4rem -0.4rem #9da5ab;
                border-radius: ${({ theme }) => theme.app.borderRadius.primary};
            }
            
            & .react-autosuggest__suggestion {
                padding: 10px 20px;
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

const SuggestionHover = styled.p`
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    
    &:hover, &:focus {
        color: ${({ theme }) => theme.search.font.hover};
    }
    &:active {
        color: ${({ theme }) => theme.search.font.click};
    } 
`;

export const TitleSuggestion = styled(SuggestionHover)`
    font-size: 22px;
`;
export const TextSuggestion = styled(SuggestionHover)`
    font-size: 18px;
`;
