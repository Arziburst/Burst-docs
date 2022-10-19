// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Markdown } from '../../../components';

// MD file
import md from './index.md';

const ComponentTestMarkdown: FC = () => {
    return (
        <Markdown>
            {md}
        </Markdown>
    );
};

export default () => (
    <ErrorBoundary>
        <ComponentTestMarkdown />
    </ErrorBoundary>
);
