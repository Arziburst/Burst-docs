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
            position: absolute;
            background-color: ${({ theme }) => theme.app.color.primary};
    
            &.react-autosuggest__suggestions-container--open {
                padding: 5px;
                box-shadow: 0 4px 2.4rem -0.4rem #9da5ab;
                border-radius: ${({ theme }) => theme.app.borderRadius.primary};
            }

            & .react-autosuggest__suggestion {
                cursor: pointer;
                padding: 10px 20px;
                font-family: ${({ theme }) => theme.fontFamily.primary};
            }
        }
    }
`;

export const TitleSuggestion = styled.span`
    font-size: 22px;
`;
export const TextSuggestion = styled.span`
    font-size: 18px;
`;
