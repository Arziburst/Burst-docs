// Core
import { lazy } from 'react';

import { optionDeploy } from './optionDeploy';

export const Deploy = {
    ComponentLazy: lazy(() => import(/* webpackChunkDeploy: "Deploy" */ './ComponentMarkdown')),
    option:        optionDeploy,
};
