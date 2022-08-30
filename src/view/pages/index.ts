// Core
import { lazy } from 'react';

// Pages
export const Welcome = lazy(() => import(/* webpackChunkName: "Welcome" */ './Welcome'));
export const HowToInstall = lazy(() => import(/* webpackChunkName: "HowToInstall" */ './HowToInstall'));
export const Requirements = lazy(() => import(/* webpackChunkName: "Requirements" */ './Requirements'));
export const OptionalExtensions = lazy(() => import(/* webpackChunkName: "OptionalExtensions" */ './OptionalExtensions'));
export const Deploy = lazy(() => import(/* webpackChunkName: "Deploy" */ './Deploy'));
export const Feedback = lazy(() => import(/* webpackChunkName: "Feedback" */ './Feedback'));
