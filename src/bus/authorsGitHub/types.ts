// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type AuthorGitHub = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    contributions: number;
}
export type AuthorsGitHub = Array<AuthorGitHub>
export type AuthorsGitHubState = AuthorsGitHub | null

// Contracts
export type BaseContact<T = any> = CaseReducer<AuthorsGitHubState, PayloadAction<T>>