// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Welcome } from '../pages/Welcome';
import Pages from '../pages';

export const Public: FC = () => {
    return (
        <Routes>
            {Pages.map((element, index) => {
                const Component: any = element.ComponentLazy;

                return (
                    <Route
                        element = { <Component /> }
                        key = { index }
                        path = { element.option.rootRoutePath }
                    />
                );
            })}
            <Route
                element = {
                    <Navigate
                        replace
                        to = { Welcome.option.rootRoutePath }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
