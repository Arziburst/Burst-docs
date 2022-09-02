// Core
import enquirer from 'enquirer';

// Types
import { TypesGenerateOptionsItem } from '../types';

export const getSelectedItem = async (options: TypesGenerateOptionsItem[]): Promise<TypesGenerateOptionsItem> => {
    const templateQuestions = {
        type:    'autocomplete',
        name:    'optionChoice',
        message: 'What do you want to generate?',
        choices: options.map((configItem: TypesGenerateOptionsItem) => configItem.name),
        suggest(input: string, choices: string[]) {
            return choices.filter((choice: any) => {
                return choice.message.toLowerCase().startsWith(input.toLowerCase());
            });
        },
    };
    const templateAnswers: { optionChoice: string } = await enquirer.prompt(templateQuestions);

    return options.find(
        (item: TypesGenerateOptionsItem) => item.name === templateAnswers.optionChoice,
    ) as TypesGenerateOptionsItem;
};

