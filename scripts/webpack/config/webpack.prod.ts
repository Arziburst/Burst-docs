// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';

// Modules
import * as modules from '../modules';

export const getProdConfig = () => {
    return merge(
        modules.cleanDirectories(),
        getCommonConfig(),
        {
            mode:    'none',
            devtool: 'source-map',
            output:  {
                library: 'BurstDocs',
            },
        },
        modules.cleanDirectories(),
        modules.loadImagesProd(),
        modules.loadFontsProd(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
    );
};
