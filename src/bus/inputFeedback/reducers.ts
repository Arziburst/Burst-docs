// Types
import * as types from './types';

// Initial state
import { initialState } from './slice';

export const setInputsFeedback: types.BaseContact<types.InputFeedback> = (/* state => */__, action) => {
    return action.payload;
};
export const resetInputsFeedback = () => initialState;
