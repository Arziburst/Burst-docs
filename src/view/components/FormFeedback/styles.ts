// Core
import styled from 'styled-components';

interface PropTypesInputs extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    error: boolean
}

const gap = '10px';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${gap};
`;
export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${gap};
    width: 100%;
    
    @media (min-width: 992px) {
        flex-direction: row;
        & > div {
            width: 50%;
        }
    }
`;

export const ErrorTextForInput = styled.p`
    margin: 10px 0px;

    ${({ theme }) => ({
        color:      theme.input.primary.fontColor.error,
        fontFamily: theme.fontFamily.primary,
    })}
`;

export const Input = styled.input<PropTypesInputs>`
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.input.primary.borderColor.primary};
    ${({ theme }) => ({
        color:      theme.fontColor.primary,
        fontFamily: theme.fontFamily.primary,
    })}

    ${({ error, theme }) => error && { borderColor: theme.input.primary.error }}

    &:hover, &:focus {
        border-color: ${({ theme }) => theme.input.primary.borderColor.hover};
    }
`;
export const Textarea = styled.textarea<PropTypesInputs>`
    width: 100%;
    resize: none;
    border: none;
    padding: 15px;
    height: 100px;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.input.primary.borderColor.primary};
    ${({ theme }) => ({
        color:      theme.fontColor.primary,
        fontFamily: theme.fontFamily.primary,
    })}

    ${({ error, theme }) => error && { borderColor: theme.input.primary.error }}

    &:hover, &:focus {
        border-color: ${({ theme }) => theme.input.primary.borderColor.hover};
    }

    @media (min-width: 992px) and (min-width: 500px) {
        height: 150px;
    }
`;
export const Submit = styled.button`
    background-color: transparent;
    padding: 0px;
    margin: 0px;
    border: none;
    cursor: pointer;
    
    background-color: ${({ theme }) => theme.button.primary.backgroundColor.primary};
    border-radius: 5px;
    padding: 15px 0px;
    width: 100%;
    font-size: 20px;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.button.primary.fontColor.primary};
    
    &:hover, &:focus {
        background-color: ${({ theme }) => theme.button.primary.backgroundColor.hover};
        color: ${({ theme }) => theme.button.primary.fontColor.hover};
    }
    &:active {
        background-color: ${({ theme }) => theme.button.primary.backgroundColor.click};
        color: ${({ theme }) => theme.button.primary.fontColor.click};
    }
    
    @media (min-width: 550px) {
        width: auto;
        padding: 15px 100px;
    }
`;
