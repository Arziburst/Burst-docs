// Core
import { lazy } from 'react';

import { optionOptionalVSCodeExtensions } from './optionOptionalVSCodeExtensions';

export const OptionalVSCodeExtensions = {
    ComponentLazy: lazy(() => import(/* webpackChunkOptionalVSCodeExtensions: "OptionalVSCodeExtensions" */ './ComponentMarkdown')),
    option:        optionOptionalVSCodeExtensions,
};
