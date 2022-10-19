// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers MarkerGen
import toggles from '../../bus/client/toggles';
import inputSearch from '../../bus/client/inputSearch';
import linkAnchor from '../../bus/client/linkAnchor';
import authorsGitHub from '../../bus/authorsGitHub/slice';
import inputFeedback from '../../bus/inputFeedback/slice';

// Middleware
import {
    middleware,
} from './middleware';

export const store = configureStore({
    reducer: {
        // MarkerGen add reducer
        toggles,
        inputSearch,
        linkAnchor,
        authorsGitHub,
        inputFeedback,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
