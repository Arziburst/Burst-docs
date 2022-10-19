// Core
import React, { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Bus
import { useLinkAnchorRedux } from '../../../bus/client/linkAnchor';
import { useTogglesRedux } from '../../../bus/client/toggles';

// Containers
import { ContainerScrollbar, ContainerSetHeightWithoutHeader } from '../../containers';

// Components
import { ItemNav, Details, Search } from '../';

// Context
import { ContextApp } from '../..';

// Pages
import { DocumentationPages } from '../../pages/Docs/dataDocs';

// Styles
import * as S from './styles';

// Types
import { TypesPage } from '../../pages/Docs/types';
interface PropTypes extends React.HTMLAttributes<HTMLMenuElement> {}

export const Nav: FC<PropTypes> = ({ ...props }) => {
    const { refs } = useContext(ContextApp);
    const { pathname } = useLocation();

    const { togglesRedux, setToggleAction } = useTogglesRedux();
    const { setLinkAnchorAction } = useLinkAnchorRedux();

    const onClickTitle = (id: string) => {
        if (refs) {
            refs.current = [];
            if (pathname.split('/').at(-1) === id) {
                setLinkAnchorAction(id);
            }
            togglesRedux.isOpenSidebar && setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };
    const onClickSubtitle = (id:  string) => {
        if (refs) {
            refs.current = [];
            setLinkAnchorAction(id);
            togglesRedux.isOpenSidebar && setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };

    return (
        <S.Container
            { ...props }>
            <ContainerSetHeightWithoutHeader>
                <ContainerScrollbar style = {{ height: '100%', boxShadow: '0px 4px 0.5rem #9da5ab' }}>
                    <S.Ul>
                        <S.ContainerSearch>
                            <Search />
                        </S.ContainerSearch>
                        {
                            DocumentationPages.map((element: TypesPage) => {
                                if (!element.option.navLink.subtitles) {
                                    return (
                                        <li key = { element.option.navLink.path }>
                                            <ItemNav
                                                define
                                                onclick = { onClickTitle }
                                                to = { element.option.navLink.path }
                                                variant = 'h2'>
                                                {element.option.navLink.textLink.text}
                                            </ItemNav>
                                        </li>
                                    );
                                }

                                return (
                                    <li key = { element.option.navLink.path }>
                                        <Details
                                            element = { element.option }
                                            onClickSubtitle = { onClickSubtitle }
                                            onClickTitle = { onClickTitle }
                                        />
                                    </li>
                                );
                            })
                        }
                    </S.Ul>
                </ContainerScrollbar>
            </ContainerSetHeightWithoutHeader>
        </S.Container>
    );
};
