// Core
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Root from '../pages/Root';
import { Docs } from '../pages/Docs';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Root /> }
                path = '/'
            />
            <Route
                element = { <Docs /> }
                path = 'docs/*'
            />
        </Routes>
    );
};
