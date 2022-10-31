// Core
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

export const MarkdownToJSXStyled = styled(Markdown)`
    * {
        font-family: sans-serif;
        font-size: 20px;
        word-wrap: break-word;
    }

    em {
        font-style: italic;
    }

    & li {
        & h1, & h2, & h3, & h4, & h5, & h6 {
            display: inline-block;
        }
    }

    & li::before {
        content: "•";
        padding-right: 5px;

    }
    & li:not(:last-child) {
        margin-bottom: 5px;
    }

    & pre, code {
        background-color: #eeeeee;
    }

    & pre {
        padding: 16px;
        margin: 10px 0px;
        white-space: pre-wrap;
        & code {
            padding: 0px;
        }
    }
    & code {
        padding: 5px;
    }

    & strong {
        font-weight: bold;
    }

    img {
        max-width: 100%
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        margin-bottom: 20px;
    }

    & h3,
    & h4,
    & h5,
    & h6 {
        margin-top: 40px;
    }

    & p {
        line-height: 30px;
        margin: 10px 0px;
    }
`;
export const H1 = styled.h1`
    font-size: 40px;
    & * {
        font-size: 40px;
    }
`;
export const H2 = styled.h2`
    font-size: 36px;
    & * {
        font-size: 36px;
    }
`;
export const H3 = styled.h3`
    font-size: 32px;
    & * {
        font-size: 32px;
    }
`;
export const H4 = styled.h4`
    font-size: 28px;
    & * {
        font-size: 28px;
    }
`;
export const H5 = styled.h5`
    font-size: 26px;
    & * {
        font-size: 26px;
    }
`;
export const H6 = styled.h6`
    font-size: 24px;
    & * {
        font-size: 24px;
    }
`;
export const Img = styled.img`
    
`;

