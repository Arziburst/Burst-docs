// Core
import chalk from 'chalk';
import { generateTemplateFiles } from './generate';

// Cases
// lorem lorem =>
// __name__(noCase) === lorem Lorem lorem
// __name__(pascalCase) === LoremLorem
// __name__(constantCase) === LOREM_LOREM
// __name__(kebabCase) === lorem-lorem
// __name__ === loremLorem

generateTemplateFiles([
    {
        name:            'Bus: /bus/__entityName__',
        stringReplacers: '__entityName__',
        pathTemplate:    './scripts/generate/templates/busEntity',
        outputPath:      './src/bus/__entityName__',
        addRowFiles:     [
            {
                pathFromOutputPath: '../../init/redux/index.ts',
                marker:             '// Reducers MarkerGen',
                whereInsertRow:     'after marker',
                generationRow:      'import __entityName__ from \'../../bus/__entityName__/slice\';',
            },
            {
                pathFromOutputPath: '../../init/redux/index.ts',
                marker:             '// MarkerGen add reducer',
                whereInsertRow:     'after marker',
                generationRow:      '__entityName__,',
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created bus entity !!!'));
        },
    },
    {
        name:            'Saga: /bus/__entityName__/saga',
        stringReplacers: '__entityName__',
        pathTemplate:    './scripts/generate/templates/saga',
        outputPath:      './src/bus/__entityName__/saga',
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// Middleware MarkerGen',
                whereInsertRow:     'after marker',
                generationRow:      'import { use__entityName__(pascalCase)Saga } from \'./saga\'; /* Choose one technology, Saga or Thunk */',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen api hook',
                whereInsertRow:     'after marker',
                generationRow:      'const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Saga();  /* Saga api hook */',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen use api hook',
                whereInsertRow:     'after marker',
                generationRow:      '//     fetch__entityName__(pascalCase)();',
            },
            {
                pathFromOutputPath: '../../../init/redux/rootSaga.ts',
                marker:             '// Tools MarkerGen imports',
                whereInsertRow:     'after marker',
                generationRow:      'import { watch__entityName__(pascalCase) } from \'../../bus/__entityName__/saga\';',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/rootSaga.ts',
                marker:             '// MarkerGen rootSaga',
                whereInsertRow:     'after marker',
                generationRow:      'watch__entityName__(pascalCase)(),',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen import Saga or Thunk',
                whereInsertRow:     'after marker',
                generationRow:      'import createSagaMiddleware from \'redux-saga\';',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen sagaMiddleware',
                whereInsertRow:     'after marker',
                generationRow:      'const sagaMiddleware = createSagaMiddleware();',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen insert middleware Saga or Thunk',
                whereInsertRow:     'after marker',
                generationRow:      'sagaMiddleware,',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen export sagaMiddleware',
                whereInsertRow:     'after marker',
                generationRow:      'sagaMiddleware,',
                onceInsertRow:      true,
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created saga !!!'));
        },
    },
    {
        name:            'Thunk: /bus/__entityName__/thunk',
        stringReplacers: '__entityName__',
        pathTemplate:    './scripts/generate/templates/thunk',
        outputPath:      './src/bus/__entityName__/thunk',
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// Middleware MarkerGen',
                whereInsertRow:     'after marker',
                generationRow:      'import { use__entityName__(pascalCase)Thunk } from \'./thunk\'; /* Choose one technology, Saga or Thunk */',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen api hook',
                whereInsertRow:     'after marker',
                generationRow:      'const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Thunk();  /* Thunk api hook */',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen use api hook',
                whereInsertRow:     'after marker',
                generationRow:      '//     fetch__entityName__(pascalCase)();',
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen import Saga or Thunk',
                whereInsertRow:     'after marker',
                generationRow:      'import thunkMiddleware from \'redux-thunk\';',
                onceInsertRow:      true,
            },
            {
                pathFromOutputPath: '../../../init/redux/middleware.ts',
                marker:             '// MarkerGen insert middleware Saga or Thunk',
                whereInsertRow:     'after marker',
                generationRow:      'thunkMiddleware,',
                onceInsertRow:      true,
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created thunk !!!'));
        },
    },
    {
        name:            'Component: /view/components/__componentName__',
        stringReplacers: '__componentName__',
        pathTemplate:    './scripts/generate/templates/component',
        outputPath:      './src/view/components/__componentName__(pascalCase)',
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after marker',
                generationRow:      'export * from \'./__componentName__(pascalCase)\';',
            },
        ],
        onComplete: () => {
            console.log('Created component !!!');
        },
    },
    {
        name:            'Element: /view/elements/__elementName__',
        stringReplacers: '__elementName__',
        pathTemplate:    './scripts/generate/templates/element/',
        outputPath:      './src/view/elements/',
        addRowFiles:     [
            {
                pathFromOutputPath: './index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after marker',
                generationRow:      'export * from \'./__elementName__(pascalCase)\';',
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created element !!!'));
        },
    },
    {
        name:            'Container: /view/containers/__containerName__',
        stringReplacers: '__containerName__',
        pathTemplate:    './scripts/generate/templates/container',
        outputPath:      './src/view/containers/__containerName__(pascalCase)',
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after marker',
                generationRow:      'export * from \'./__containerName__(pascalCase)\';',
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created container !!!'));
        },
    },
    {
        name:            'Page: /view/pages/__pageName__',
        stringReplacers: '__pageName__',
        pathTemplate:    './scripts/generate/templates/page',
        outputPath:      './src/view/pages/__pageName__(pascalCase)',
        addRowFiles:     [
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen Re-export',
                whereInsertRow:     'after marker',
                generationRow:      'import { __pageName__(pascalCase) } from \'./__pageName__(pascalCase)\';',
            },
            {
                pathFromOutputPath: '../index.ts',
                marker:             '// MarkerGen arr',
                whereInsertRow:     'before marker',
                generationRow:      '__pageName__(pascalCase),',
            },
        ],
        onComplete: () => {
            console.log(chalk.green('Created page !!!'));
        },
    },
]);
