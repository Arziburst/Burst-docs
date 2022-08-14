// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

export const getCommonConfig = () => {
    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:                BUILD_DIRECTORY,
                filename:            ({ chunk }) => chunk?.name === 'main' ? 'index.js' : 'js/[name].js',
                chunkFilename:       'js/[name].js',
                assetModuleFilename: 'assets/[name][ext]',
            },
            resolve: {
                extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
            },
        },
        modules.loadTypeScript(),
        modules.defineEnvVariables(),
    );
};
