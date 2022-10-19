// Core
import React, { FC, Suspense } from 'react';
import { ContainerSetHeightWithoutHeader } from '../containers';

// Elements
import { Spinner } from '../elements';

// Routes
import { Public } from './Public';

export const Routes: FC = () => {
    return (
        <Suspense fallback = {
            <ContainerSetHeightWithoutHeader>
                <Spinner />
            </ContainerSetHeightWithoutHeader>
        }>
            <Public />
        </Suspense>
    );
};
