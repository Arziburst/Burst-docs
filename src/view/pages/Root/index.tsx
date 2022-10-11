// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

const Root: FC = () => {
    return (
        <h1>Root</h1>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
