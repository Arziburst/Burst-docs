// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Markdown } from '../../../components';

// MD file
import md from './index.md';

const ComponentBurstGenerateFilesMarkdown: FC = () => {
    return (
        <Markdown>
            {md}
        </Markdown>
    );
};

export default () => (
    <ErrorBoundary>
        <ComponentBurstGenerateFilesMarkdown />
    </ErrorBoundary>
);
