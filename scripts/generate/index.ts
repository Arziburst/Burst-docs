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
                pathFromOutputPath:  '../index.ts',
                marker:              '// Re-export',
                insertRowNextMarker: 'after',
                generationRow:       'import { __name__(pascalCase) } from \'./__name__(pascalCase)\';',
            },
            {
                pathFromOutputPath:  '../index.ts',
                marker:              '// MarkerGen arr',
                insertRowNextMarker: 'before',
                generationRow:       '__name__(pascalCase),',
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
                pathFromOutputPath:  '../index.ts',
                marker:              '// Re-export',
                insertRowNextMarker: 'after',
                generationRow:       '__componentName__(pascalCase),',
            },
        ],
        onComplete: () => {
            console.log('MY generateTemplateFiles Function onComplete');
        },
    },
]);

// todo remove

//? Example
// generateTemplateFiles([
//     {
//         pathTemplate:    resolve(PROJECT_ROOT, './scripts/generate/templates/page'),
//         name:            'Page: /pages/__name__',
//         stringReplacers: '__name__',
//         outputPath:      resolve(PROJECT_ROOT, './src/view/pages/__name__(pascalCase)'),
//         addRowFiles:     [
//             {
//                 pathFromOutputPath:  '../index.ts',
//                 marker:              '// Gen marker Pages',
//                 insertRowNextMarker: 'before',
//                 generationRow:       'export const __name__(pascalCase) = lazy(() => import(/* webpackChunkName: "__name__(pascalCase)" */ \'./__name__(pascalCase)\'));',
//             },
//         ],
//         onComplete: () => {
//             console.log('Created page !!!');
//         },
//     },
// ]);


// Old gen
// generateTemplateFiles([
//     {
//         option:      'Entity: /bus/__entityName__',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/busEntity'),
//         },
//         stringReplacers: [ '__entityName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
//     {
//         option:      'Saga: /bus/__entityName__/saga',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/saga'),
//         },
//         stringReplacers: [ '__entityName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__/saga'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
//     {
//         option:      'Thunk: /bus/__entityName__/thunk',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/thunk'),
//         },
//         stringReplacers: [ '__entityName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/bus/__entityName__/thunk'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
//     {
//         option:      'Component: /view/components/__componentName__',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/component'),
//         },
//         stringReplacers: [ '__componentName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/view/components/__componentName__(pascalCase)'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
//     {
//         option:      'Container: /view/containers/__containerName__',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/container'),
//         },
//         stringReplacers: [ '__containerName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/view/containers/__containerName__(pascalCase)'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
//     {
//         option:      'Page: /view/pages/__pageName__',
//         defaultCase: CaseConverterEnum.CamelCase,
//         entry:       {
//             folderPath: resolve(PROJECT_ROOT, './scripts/generate/templates/page'),
//         },
//         stringReplacers: [ '__pageName__' ],
//         output:          {
//             path:                       resolve(PROJECT_ROOT, './src/view/pages/__pageName__(pascalCase)'),
//             pathAndFileNameDefaultCase: CaseConverterEnum.CamelCase,
//             overwrite:                  true,
//         },
//         onComplete: (results) => {
//             console.log('results', results);
//         },
//     },
// ]);
