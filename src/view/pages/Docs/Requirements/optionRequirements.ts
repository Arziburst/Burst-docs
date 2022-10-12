// Constants
import { DOCS } from '../../../../init';

// Types
import { TypesOption } from '../types';

export const optionRequirements: TypesOption = {
    rootRoutePath: '/requirements',

    navLink: {
        path:     `/${DOCS}/requirements`,
        textLink: {
            id:   'requirements',
            text: 'Requirements',
        },
        subtitles: [
            {
                id:   'available-scripts',
                text: 'Available scripts',
            },
        ],
    },
};
