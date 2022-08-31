export type optionsGenerationRow = {
    pathFromOutputPath: string
    marker: string
    insertRowNextMarker?: 'before' | 'after' | 'line after' | 'line before'
    generationRow: string
}

export type GenerateOptionsItem = {
    name:      string
    pathTemplate:       string
    stringReplacers:    string
    outputPath:         string
    addRowFiles?: optionsGenerationRow[]
    onComplete?:        Function
}

export type CreateFiles = {
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
