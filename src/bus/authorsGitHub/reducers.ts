// Types
import * as types from './types';

// Initial state
import { initialState } from './slice';

export const setFirstAuthorGitHub: types.BaseContact<types.AuthorGitHub> = (state, action) => {
    if (state !== null && state[ 0 ]) {
        return [ action.payload, ...state ];
    }

    return [ action.payload ];
};
export const setAuthorsGitHub: types.BaseContact<types.AuthorsGitHub> = (state, action) => {
    if (state !== null && state[ 0 ]) {
        return [ ...state, ...action.payload ];
    }

    return action.payload;
};
export const resetAuthorsGitHubToInitial = () => initialState;

