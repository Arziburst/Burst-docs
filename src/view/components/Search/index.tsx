// Core
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoSuggest from 'react-autosuggest';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';
import { useLinkAnchorRedux } from '../../../bus/client/linkAnchor';

// Data
import { DocumentationPages } from '../../pages/Docs/dataDocs';

// Bus
import { useInputSearchRedux } from '../../../bus/client/inputSearch';

// Styles
import * as S from './styles';

// Types
import * as types from '../../pages/Docs/types';
type NewData = types.TypesTextLinkSidebar & {isTitle: boolean, path: string} // add path for link!!!!!!!!!!!!

export const Search: FC = () => {
    const navigate = useNavigate();
    const { setToggleAction } = useTogglesRedux();
    const { setLinkAnchorAction } = useLinkAnchorRedux();
    const { inputSearchRedux, setInputSearch, resetInputSearchToInitial } = useInputSearchRedux();

    const dataForSearch = DocumentationPages.map((dataPge) => {
        let newData: NewData[] = [
            {
                ...dataPge.option.navLink.textLink,
                isTitle: true,
                path:    dataPge.option.navLink.path,
            },
        ];

        if (dataPge.option.navLink.subtitles) {
            dataPge.option.navLink.subtitles.forEach((obj) => {
                newData = [
                    ...newData,
                    {
                        ...obj,
                        isTitle: false,
                        path:    dataPge.option.navLink.path + `#${obj.id}`,
                    },

                ];
            });
        }

        return newData;
    }).flat(1);


    const [ suggestions, setSuggestions ] = useState<NewData[]>(dataForSearch);

    function getSuggestions(value: string): NewData[] {
        const result = dataForSearch.filter((data) => {
            const reg = new RegExp(`${value.toLowerCase()}`);

            return reg.test(data.text.toLowerCase());
        });

        return result;
    }

    const onClickSuggestion = (suggestion: NewData) => {
        setLinkAnchorAction(suggestion.id);
        setToggleAction({ type: 'isOpenSidebar', value: false });
    };

    return (
        <S.Container>
            <AutoSuggest
                highlightFirstSuggestion
                getSuggestionValue = { (suggestion) => suggestion.text }
                inputProps = {{
                    placeholder: 'Search',
                    value:       inputSearchRedux,
                    onChange:    (_, { newValue, method }) => {
                        setInputSearch(newValue);
                    },
                }}
                renderSuggestion = { (suggestion) => {
                    if (suggestion.isTitle) {
                        return (
                            <S.TitleSuggestion onClick = { () => onClickSuggestion(suggestion) }>
                                {suggestion.text}
                            </S.TitleSuggestion>
                        );
                    }

                    return (
                        <S.TextSuggestion onClick = { () => onClickSuggestion(suggestion) }>
                            {suggestion.text}
                        </S.TextSuggestion>
                    );
                } }
                suggestions = { suggestions }
                onSuggestionSelected = { (_, { suggestion }) => {
                    navigate(suggestion.path);
                }
                }
                onSuggestionsClearRequested = { () => {
                    setSuggestions([]);
                    resetInputSearchToInitial();
                } }
                onSuggestionsFetchRequested = { ({ value }) => {
                    setInputSearch(value);
                    setSuggestions(getSuggestions(value));
                } }
            />
        </S.Container>
    );
};
