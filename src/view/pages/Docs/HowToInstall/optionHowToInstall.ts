// Constants
import { DOCS } from '../../../../init';

// Types
import { TypesOption } from '../types';

export const optionHowToInstall: TypesOption = {
    rootRoutePath: '/how-to-install',

    navLink: {
        path:     `/${DOCS}/how-to-install`,
        textLink: {
            id:   'how-to-install',
            text: 'How To Install',
        },
        subtitles: [
            {
                id:   'features',
                text: 'Features',
            },
            {
                id:   'initializing',
                text: 'Initializing',
            },
        ],
    },
};
