// Core
import React, { FC, Suspense } from 'react';

// Elements
import { Spinner } from '../elements';

// Routes
import { Public } from './Public';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <Spinner /> }>
            <Public />
        </Suspense>
    );
};
