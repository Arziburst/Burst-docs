// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = null;

export const authorsGitHubSlice = createSlice<types.AuthorsGitHubState, typeof reducers>({
    name: 'authorsGitHub',
    initialState,
    reducers,
});

export const sliceName = authorsGitHubSlice.name;
export const authorsGitHubActions = authorsGitHubSlice.actions;
export default authorsGitHubSlice.reducer;
