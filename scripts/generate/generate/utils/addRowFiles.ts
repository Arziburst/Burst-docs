// Core
import fs from 'fs';
import { resolve } from 'path';

// Utils
import { replaceWordCase } from './replaceWordCase';

// Types
import { GenerateOptionsItem, optionsGenerationRow } from '../types';

export const addRowFiles = (selectedConfigItem: GenerateOptionsItem, selectedName: string) => {
    selectedConfigItem.addRowFiles?.forEach((element: optionsGenerationRow) => {
        const pathFile = resolve(
            replaceWordCase({
                string:          selectedConfigItem.outputPath,
                stringReplacers: selectedConfigItem.stringReplacers,
                selectedName:    selectedName,
            }) + '/' + element.pathFromOutputPath,
        );

        const dataRedFile = fs.readFileSync(pathFile, { encoding: 'utf-8' });

        const reg = new RegExp(element.marker, 'g');
        let dataRedFileReplaced = dataRedFile;

        // let numberSpaces: null | number = null;

        if (typeof element.insertRowNextMarker === 'undefined'
        || element.insertRowNextMarker === 'line before') {
            dataRedFileReplaced = dataRedFile.replace(reg, element.marker + ' ' + element.generationRow);
        }
        if (element.insertRowNextMarker === 'line after') {
            dataRedFileReplaced = dataRedFile.replace(reg, element.generationRow + ' ' + element.marker);
        }
        if (element.insertRowNextMarker === 'before') {
            dataRedFileReplaced = dataRedFile.replace(reg, element.generationRow + '\n' + element.marker);
        }
        if (element.insertRowNextMarker === 'after') {
            dataRedFileReplaced = dataRedFile.replace(reg, element.marker + '\n' + element.generationRow);
        }

        const resultData = replaceWordCase({
            string:          dataRedFileReplaced,
            stringReplacers: selectedConfigItem.stringReplacers,
            selectedName:    selectedName,
        });
        fs.writeFileSync(
            pathFile,
            resultData,
        );
    });
};
