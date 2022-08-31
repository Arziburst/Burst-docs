// Core
import { lazy } from 'react';

import { optionWelcome } from './optionWelcome';

export const Welcome = {
    importLazy: lazy(() => import(/* webpackChunkWelcome: "Welcome" */ './ComponentMarkdown')),
    option:     optionWelcome,
};
