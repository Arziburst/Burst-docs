// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Markdown } from '../../components';

// MD file
import md from './index.md';

const OptionalExtensions: FC = () => {
    return (
        <Markdown>
            {md}
        </Markdown>
    );
};

export default () => (
    <ErrorBoundary>
        <OptionalExtensions />
    </ErrorBoundary>
);
