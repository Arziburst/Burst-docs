// Core
import { lazy } from 'react';

import { optionDeploy } from './optionDeploy';

export const Deploy = {
    importLazy: lazy(() => import(/* webpackChunkDeploy: "Deploy" */ './ComponentMarkdown')),
    option:     optionDeploy,
};
