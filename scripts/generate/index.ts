// Core
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';

import { generateTemplateFiles } from './generate';

generateTemplateFiles([
    {
        pathTemplate:    resolve(PROJECT_ROOT, './scripts/generate/templates/page'),
        name:            'Page: /pages/__name__',
        stringReplacers: '__name__',
        outputPath:      resolve(PROJECT_ROOT, './src/view/pages/__name__(pascalCase)'),
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after line marker',
                generationRow:      'import { __name__(pascalCase) } from \'./__name__(pascalCase)\';',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen arr',
                whereInsertRow:     'before line marker',
                generationRow:      '__name__(pascalCase),',
            },
        ],
        onComplete: () => {
            console.log('Created page !!!');
        },
    },
    {
        name:            'Component: /view/components/__componentName__',
        pathTemplate:    resolve(PROJECT_ROOT, './scripts/generate/templates/component'),
        stringReplacers: '__componentName__',
        outputPath:      resolve(PROJECT_ROOT, './src/view/components/__componentName__(pascalCase)'),
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after line marker',
                generationRow:      'export * from \'./__componentName__(pascalCase)\';',
            },
        ],
        onComplete: () => {
            console.log('Created component !!!');
        },
    },
]);
