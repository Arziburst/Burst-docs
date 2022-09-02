export type TypesOptionsGenerationRow = {
    pathFromOutputPath: string
    marker: string
    whereInsertRow?: 'before line marker' | 'after line marker' | 'after marker' | 'before marker'
    generationRow: string
}

export type TypesGenerateOptionsItem = {
    name:      string
    pathTemplate:       string
    stringReplacers:    string
    outputPath:         string
    addRowFiles?: TypesOptionsGenerationRow[]
    onComplete?:        Function
}

export type TypesCreateFiles = {
    fromFolderPath: string
    toPath: string
    selectedConfigItem: {
        pathTemplate: string,
        name: string,
        stringReplacers: string,
        outputPath: string
    }
    selectedName: string
};

export type TypesGetWordCase = {
    string: string
    stringReplacers: string
    selectedName: string
}

export type TypesDefineMarkerAndAddRow = {
    element: TypesOptionsGenerationRow
    dataRedFile: string
    tabs: string
}
