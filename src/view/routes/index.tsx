// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <div>Spinner</div> }>
            <Public />
        </Suspense>
    );
};
