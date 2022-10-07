// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = null;

export const inputFeedbackSlice = createSlice<types.InputFeedbackState, typeof reducers>({
    name: 'inputFeedback',
    initialState,
    reducers,
});

export const sliceName = inputFeedbackSlice.name;
export const inputFeedbackActions = inputFeedbackSlice.actions;
export default inputFeedbackSlice.reducer;
