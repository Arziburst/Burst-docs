// Core
import { lazy } from 'react';

import { optionFeedback } from './optionFeedback';

export const Feedback = {
    importLazy: lazy(() => import(/* webpackChunkFeedback: "Feedback" */ './Component')),
    option:     optionFeedback,
};
