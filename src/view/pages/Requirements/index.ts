// Core
import { lazy } from 'react';

import { optionRequirements } from './optionRequirements';

export const Requirements = {
    importLazy: lazy(() => import(/* webpackChunkRequirements: "Requirements" */ './ComponentMarkdown')),
    option:     optionRequirements,
};
