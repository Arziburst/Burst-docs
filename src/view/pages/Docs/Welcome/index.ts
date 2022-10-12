// Core
import { lazy } from 'react';

import { optionWelcome } from './optionWelcome';

export const Welcome = {
    ComponentLazy: lazy(() => import(/* webpackChunkWelcome: "Welcome" */ './ComponentMarkdown')),
    option:        optionWelcome,
};
