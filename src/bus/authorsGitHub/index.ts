// Core
import { useEffect } from 'react';

// Hooks
import { useDispatch, useSelector } from '../../tools/hooks';

// Tools
import { customFetch } from '../../tools/utils';

// Actions
import { authorsGitHubActions } from './slice';

// Types
import { AuthorGitHub } from './types';

export const useAuthorsGitHub = () => {
    const dispatch = useDispatch();

    const fetchAuthorGitHub = () => {
        customFetch({
            fetch: () => fetch('https://api.github.com/repos/Arziburst/burst/contributors') })
            .then((data: AuthorGitHub[] | any) => { dispatch(authorsGitHubActions.setAuthorsGitHub(data)); });

        customFetch({
            fetch: () => fetch('https://api.github.com/users/belartale') })
            .then((data: AuthorGitHub | any) => { dispatch(authorsGitHubActions.setFirstAuthorGitHub(data)); });
    };

    const authorsGitHub = useSelector((state) => state.authorsGitHub);

    useEffect(() => {
        fetchAuthorGitHub();

        return () => {
            dispatch(authorsGitHubActions.resetAuthorsGitHubToInitial());
        };
    }, []);

    return {
        authorsGitHub,
    };
};
