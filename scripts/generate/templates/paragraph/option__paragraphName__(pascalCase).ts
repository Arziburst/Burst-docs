// Constants
import { DOCS } from '../../../../init';

// Types
import { TypesOption } from '../types';

export const option__paragraphName__(pascalCase): TypesOption = {
    rootRoutePath: '/__paragraphName__(kebabCase)',

    navLink: {
        path:     `/${DOCS}/__paragraphName__(kebabCase)`,
        textLink: {
            id:   '__paragraphName__(kebabCase)',
            text: '__paragraphName__(pascalCase)',
        },
        subtitles: [
            {
                id:   'subtitles-id-__paragraphName__(kebabCase)',
                text: 'Subtitles __paragraphName__(pascalCase)',
            },
            {
                id:   'subtitles-id2-__paragraphName__(kebabCase)',
                text: 'Subtitles __paragraphName__(pascalCase)',
            },
        ],
    },
};
