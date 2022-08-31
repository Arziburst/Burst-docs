// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Markdown } from '../../components';

// MD file
import md from './index.md';

const Component__name__(pascalCase)Markdown: FC = () => {
    return (
        <Markdown>
            {md}
        </Markdown>
    );
};

export default () => (
    <ErrorBoundary>
        <Component__name__(pascalCase)Markdown />
    </ErrorBoundary>
);
