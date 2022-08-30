// Types
export type TypeLinkSidebar = {
    path:     string
    text: string,
    subtitles?: Array<{
        text: string
    }>
};

export const linkSidebar: TypeLinkSidebar[] = [
    {
        path: '/',
        text: 'Welcome',
    },
    {
        path:      '/how-to-install',
        text:      'How to install',
        subtitles: [
            {
                text: 'Features',
            },
            {
                text: 'Initializing',
            },
        ],
    },
    {
        path:      '/requirements',
        text:      'Requirements',
        subtitles: [
            {
                text: 'Available scripts',
            },
        ],
    },
    {
        path: '/optional-vscode-extensions',
        text: 'Optional VSCode Extensions',
    },
    {
        path: '/deploy',
        text: 'Deploy',
    },
    {
        path: '/feedback',
        text: 'Feedback',
    },
];
