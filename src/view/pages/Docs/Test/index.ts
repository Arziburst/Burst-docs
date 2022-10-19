// Core
import { lazy } from 'react';

import { optionTest } from './optionTest';

export const Test = {
    ComponentLazy: lazy(() => import(/* webpackChunkTest: "Test" */ './ComponentMarkdown')),
    option:        optionTest,
};
