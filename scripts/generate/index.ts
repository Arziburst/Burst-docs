import { CLIGen } from 'burst-generate-files';
import { path as ROOT_PATH_OF_YOUR_APPLICATION } from 'app-root-path';

CLIGen(ROOT_PATH_OF_YOUR_APPLICATION, [
    {
        name:      'Bus: /bus/__entityName__',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/busEntity',
                outputPath:       './src/bus/__entityName__',
                markers:          [
                    {
                        pattern:        '// Reducers MarkerGen',
                        markerTemplate: './scripts/generate/templates/busEntity/.genignore/importReducer.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                        onceInsert:     false,
                    },
                    {
                        pattern:        '// MarkerGen add reducer',
                        markerTemplate: './scripts/generate/templates/busEntity/.genignore/addReducer.ts',
                        pathToMarker:   './src/init/redux/index.ts',
                        onceInsert:     false,
                    },
                ],
            },
        ],
    },
    {
        name:      'Saga: /bus/__entityName__/saga',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/saga',
                outputPath:       './src/bus/__entityName__/saga',
                markers:          [
                    {
                        pattern:        '// Middleware MarkerGen',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importHookSaga.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen api hook',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/apiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen use api hook',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/useApiHook.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// Tools MarkerGen imports',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importWatch.ts',
                        pathToMarker:   './src/init/redux/rootSaga.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen rootSaga',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/rootSaga.ts',
                        pathToMarker:   './src/init/redux/rootSaga.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen import Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/importSaga.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen sagaMiddleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/varSagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen insert middleware Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/sagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen export sagaMiddleware',
                        markerTemplate: './scripts/generate/templates/saga/.genignore/sagaMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                ],
            },
        ],
    },
    {
        name:      'Thunk: /bus/__entityName__/thunk',
        templates: [
            {
                stringsReplacers: '__entityName__',
                pathToTemplate:   './scripts/generate/templates/thunk',
                outputPath:       './src/bus/__entityName__/thunk',
                markers:          [
                    {
                        pattern:        '// Middleware MarkerGen',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/importCustomHookThunk.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen api hook',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/varUseCustomHookThunk.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen use api hook',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/useCustomHookThunk.ts',
                        pathToMarker:   './src/bus/__entityName__/index.ts',
                    },
                    {
                        pattern:        '// MarkerGen import Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/importThunkMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                    {
                        pattern:        '// MarkerGen insert middleware Saga or Thunk',
                        markerTemplate: './scripts/generate/templates/thunk/.genignore/thunkMiddleware.ts',
                        pathToMarker:   './src/init/redux/middleware.ts',
                        onceInsert:     true,
                    },
                ],
            },
        ],
    },
    {
        name:      'Component: /view/components/__componentName__',
        templates: [
            {
                stringsReplacers: '__componentName__',
                pathToTemplate:   './scripts/generate/templates/component',
                outputPath:       './src/view/components/__componentName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen Re-export',
                        markerTemplate: './scripts/generate/templates/component/.genignore/export.ts',
                        pathToMarker:   './src/view/components/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Element: /view/elements/__elementName__',
        templates: [
            {
                stringsReplacers: '__elementName__',
                pathToTemplate:   './scripts/generate/templates/element',
                outputPath:       './src/view/elements',
                markers:          [
                    {
                        pattern:        '// MarkerGen Re-export',
                        markerTemplate: './scripts/generate/templates/element/.genignore/export.ts',
                        pathToMarker:   './src/view/elements/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Container: /view/containers/__containerName__',
        templates: [
            {
                stringsReplacers: '__containerName__',
                pathToTemplate:   './scripts/generate/templates/container',
                outputPath:       './src/view/containers/__containerName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen Re-export',
                        markerTemplate: './scripts/generate/templates/container/.genignore/export.ts',
                        pathToMarker:   './src/view/containers/index.ts',
                    },
                ],
            },
        ],
    },
    {
        name:      'Paragraph: /view/pages/Docs/__paragraphName__',
        templates: [
            {
                stringsReplacers: '__paragraphName__',
                pathToTemplate:   './scripts/generate/templates/paragraph',
                outputPath:       './src/view/pages/Docs/__paragraphName__(pascalCase)',
                markers:          [
                    {
                        pattern:        '// MarkerGen import',
                        markerTemplate: './scripts/generate/templates/paragraph/.genignore/import.ts',
                        pathToMarker:   './src/view/pages/Docs/dataDocs.ts',
                    },
                    {
                        pattern:        '// MarkerGen use paragraph',
                        markerTemplate: './scripts/generate/templates/paragraph/.genignore/useParagraph.ts',
                        pathToMarker:   './src/view/pages/Docs/dataDocs.ts',
                        genDirection:   'before',
                    },
                ],
            },
        ],
    },
]);
