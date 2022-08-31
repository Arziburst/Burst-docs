// Types
import { TypesOption } from '../types';

export const option__name__(pascalCase): TypesOption = {
    rootRoutePath: '/__name__',

    navLink: {
        path:     '/__name__',
        textLink: {
            id:   'title-id-name',
            text: '__name__(pascalCase)',
        },
        subtitles: [
            {
                id:   'subtitles-id-__name__',
                text: 'Subtitles __name__(pascalCase)',
            },
            {
                id:   'subtitles-id2-__name__',
                text: 'Subtitles __name__(pascalCase)',
            },
        ],
    },
};
