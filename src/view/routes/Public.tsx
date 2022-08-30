// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Welcome /> }
                path = { book.WELCOME }
            />
            <Route
                element = { <Pages.HowToInstall /> }
                path = { book.HOW_TO_INSTALL }
            />
            <Route
                element = { <Pages.Requirements /> }
                path = { book.REQUIREMENTS }
            />
            <Route
                element = { <Pages.OptionalExtensions /> }
                path = { book.OPTIONAL_VSCODE_EXTENSIONS }
            />
            <Route
                element = { <Pages.Deploy /> }
                path = { book.DEPLOY }
            />
            <Route
                element = { <Pages.Feedback /> }
                path = { book.FEEDBACK }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.WELCOME }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
