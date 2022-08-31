// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
// import * as Pages from '../pages';
import Pages from '../pages';

// Tools
// import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            {Pages.map((element, index) => {
                const Component: any = element.importLazy;

                return (
                    <Route
                        element = { <Component /> }
                        key = { index }
                        path = { element.option.rootRoutePath }
                    />
                );
            })}
            <Route
                element = { <h1>main /</h1> }
                path = { '/' }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { '/' }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
