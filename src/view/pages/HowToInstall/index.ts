// Core
import { lazy } from 'react';

import { optionHowToInstall } from './optionHowToInstall';

export const HowToInstall = {
    ComponentLazy: lazy(() => import(/* webpackChunkHowToInstall: "HowToInstall" */ './ComponentMarkdown')),
    option:        optionHowToInstall,
};
