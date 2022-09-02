// Core
import fs from 'fs';
import { resolve } from 'path';

// Utils
import { replaceWordCase } from './replaceWordCase';

// Types
import {
    TypesGenerateOptionsItem,
    TypesOptionsGenerationRow,
    TypesDefineMarkerAndAddRow,
} from '../types';

const defineMarkerAndAddRow = ({ element, dataRedFile, tabs }: TypesDefineMarkerAndAddRow) => {
    const reg = new RegExp(element.marker, 'g');
    let dataRedFileReplaced = dataRedFile;

    if (typeof element.whereInsertRow === 'undefined'
                || element.whereInsertRow === 'before marker') {
        dataRedFileReplaced = dataRedFile.replace(reg, element.marker + ' ' + element.generationRow);
    }
    if (element.whereInsertRow === 'after marker') {
        dataRedFileReplaced = dataRedFile.replace(reg, element.generationRow + ' ' + element.marker);
    }
    if (element.whereInsertRow === 'before line marker') {
        dataRedFileReplaced = dataRedFile.replace(reg, element.generationRow + '\n' + tabs + element.marker);
    }
    if (element.whereInsertRow === 'after line marker') {
        dataRedFileReplaced = dataRedFile.replace(reg, element.marker + '\n' + tabs + element.generationRow);
    }

    return dataRedFileReplaced;
};

export const addRowFiles = (selectedConfigItem: TypesGenerateOptionsItem, selectedName: string) => {
    selectedConfigItem.addRowFiles?.forEach((element: TypesOptionsGenerationRow) => {
        const pathFile = resolve(
            replaceWordCase({
                string:          selectedConfigItem.outputPath,
                stringReplacers: selectedConfigItem.stringReplacers,
                selectedName:    selectedName,
            }) + '/' + element.pathFromOutputPath,
        );

        let tabs: string = '';

        const dataRedFile = fs.readFileSync(pathFile, { encoding: 'utf-8' });

        dataRedFile
            .split(/\r?\n/)
            .forEach((string: string) => {
                if (string.includes(element.marker)) {
                    const stringWithRemovedMarker: string = string.replace(element.marker, '');

                    stringWithRemovedMarker.split('').forEach((str) => {
                        if (str === ' ') {
                            tabs === null ? tabs = ' ' : tabs += ' ';
                        }
                    });
                }
            });

        const dataRedFileReplaced = defineMarkerAndAddRow({ element, dataRedFile, tabs });

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
