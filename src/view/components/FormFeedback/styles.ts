// Core
import styled from 'styled-components';

// Elements
import { Button } from '../../elements';

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
export const Submit = styled(Button)`
    width: 100%;
    font-size: 20px;
    
    @media (min-width: 500px) {
        width: auto;
        padding: 15px 100px;
    }
`;
