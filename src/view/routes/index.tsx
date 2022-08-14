// Core
import React, { Suspense } from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Routes = () => {
    return (
        <Suspense fallback={<div>Spinner</div>}>
            <ReactRoutes>
                <Route
                    element={<Pages.Generation />}
                    path={book.GENERATION}
                />
                <Route
                    element={<Pages.Root />}
                    path={book.ROOT}
                />
                <Route
                    element={
                        <Navigate
                            replace
                            to={book.ROOT}
                        />
                    }
                    path='*'
                />
            </ReactRoutes>
        </Suspense>
    );
};
