// Core
import { lazy } from 'react';

import { optionBurstGenerateFiles } from './optionBurstGenerateFiles';

export const BurstGenerateFiles = {
    ComponentLazy: lazy(() => import(/* webpackChunkBurstGenerateFiles: "BurstGenerateFiles" */ './ComponentMarkdown')),
    option:        optionBurstGenerateFiles,
};
