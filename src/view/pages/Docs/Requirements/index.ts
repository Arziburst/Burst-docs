// Core
import { lazy } from 'react';

import { optionRequirements } from './optionRequirements';

export const Requirements = {
    ComponentLazy: lazy(() => import(/* webpackChunkRequirements: "Requirements" */ './ComponentMarkdown')),
    option:        optionRequirements,
};
