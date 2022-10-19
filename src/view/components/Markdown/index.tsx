// Core
import React, { FC, useContext, useLayoutEffect } from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

// Context
import { ContextApp } from '../..';

// Styles
import * as S from './styles';
import { useLinkAnchorRedux } from '../../../bus/client/linkAnchor';

// Types
type PropTypes = {
    children: string
}
type TypesOverrides = {
    overrides: MarkdownToJSX.Options['overrides']
}

export const Markdown: FC<PropTypes> = ({ children }) => {
    const { refs } = useContext(ContextApp);

    const { linkAnchorRedux, resetLinkAnchorToInitial } = useLinkAnchorRedux();

    useLayoutEffect(() => {
        if (linkAnchorRedux && refs) {
            const elementFound: HTMLElement | undefined = refs.current.find(
                (element) => element.id === linkAnchorRedux,
            );
            elementFound && elementFound.scrollIntoView({ behavior: 'smooth' });
            refs.current = [];
            resetLinkAnchorToInitial();
        }
    }, [ linkAnchorRedux ]);

    const addRef = (element: HTMLElement) => {
        if (element && refs && refs.current) {
            refs.current = [ ...refs.current, element ];
        }
    };

    const options: TypesOverrides = {
        overrides: {
            h1: { component: S.H1, props: { ref: addRef }},
            h2: { component: S.H2, props: { ref: addRef }},
            h3: { component: S.H3, props: { ref: addRef }},
            h4: { component: S.H4, props: { ref: addRef }},
            h5: { component: S.H5, props: { ref: addRef }},
            h6: { component: S.H6, props: { ref: addRef }},

            image: { component: S.Img },
        },
    };

    return (
        <S.MarkdownToJSXStyled options = { options }>
            {children}
        </S.MarkdownToJSXStyled>
    );
};
