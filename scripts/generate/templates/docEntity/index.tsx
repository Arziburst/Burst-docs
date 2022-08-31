// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Markdown } from '../../components';

// MD file
import md from './index.md';

const __docEntityName__(pascalCase): FC = () => {
    return (
        <Markdown>
            {md}
        </Markdown>
    );
};

export default () => (
    <ErrorBoundary>
        <__docEntityName__(pascalCase) />
    </ErrorBoundary>
);