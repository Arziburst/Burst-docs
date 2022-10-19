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
// type NewData = types.TypesTextLinkSidebar & {isTitle: boolean, path: string}
interface Item extends types.TypesTextLinkSidebar {
    isTitle: boolean,
    path: string
}
type NewData = {
    page: string
    items: Item[]
}

export const Search: FC = () => {
    const navigate = useNavigate();
    const { togglesRedux, setToggleAction } = useTogglesRedux();
    const { setLinkAnchorAction } = useLinkAnchorRedux();
    const { inputSearchRedux, setInputSearch, resetInputSearchToInitial } = useInputSearchRedux();

    const dataForSearch = DocumentationPages.map((dataPge) => {
        let newData: NewData = {
            page:  dataPge.option.navLink.textLink.id,
            items: [
                {
                    ...dataPge.option.navLink.textLink,
                    isTitle: true,
                    path:    dataPge.option.navLink.path,
                },
            ],
        };

        if (dataPge.option.navLink.subtitles) {
            dataPge.option.navLink.subtitles.forEach((obj) => {
                newData.items = [
                    ...newData.items,
                    {
                        ...obj,
                        isTitle: false,
                        path:    dataPge.option.navLink.path,
                    },

                ];
            });
        }

        return newData;
    }).flat(1);

    const [ suggestions, setSuggestions ] = useState<NewData[]>(dataForSearch);

    function getSuggestions(value: string): NewData[] | [] {
        const reg = new RegExp(`${value.toLowerCase()}`);

        let newData: any[] = [];

        dataForSearch.forEach((data) => {
            const result = data.items.filter((item) => reg.test(item.text.toLowerCase()));

            if (result.length > 0) {
                newData = [
                    ...newData,
                    {
                        ...data,
                        items: result,
                    },
                ];
            }
        });

        return newData;
    }

    const onSelectSuggestion = (suggestion: Item) => {
        setLinkAnchorAction(suggestion.id);
        togglesRedux.isOpenSidebar && setToggleAction({ type: 'isOpenSidebar', value: false });
        navigate(suggestion.path);
    };

    return (
        <S.Container>
            <AutoSuggest
                multiSection
                getSectionSuggestions = { (section: any) => section.items }
                getSuggestionValue = { (suggestion) => suggestion.text }
                inputProps = {{
                    placeholder: 'Search',
                    value:       inputSearchRedux,
                    onChange:    (event, { newValue }) => {
                        setInputSearch(newValue);
                    },
                }}
                renderSectionTitle = { (section) => section.languages }
                renderSuggestion = { (suggestion: Item) => {
                    if (suggestion.isTitle) {
                        return (
                            <S.TitleSuggestion>
                                {suggestion.text}
                            </S.TitleSuggestion>
                        );
                    }

                    return (
                        <S.TextSuggestion>
                            {suggestion.text}
                        </S.TextSuggestion>
                    );
                } }
                suggestions = { suggestions }
                onSuggestionSelected = { (event,
                    { suggestion }) => {
                    onSelectSuggestion(suggestion);
                } }
                onSuggestionsClearRequested = { () => {
                    setSuggestions(dataForSearch);
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
