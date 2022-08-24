// Core
import React, { FC, useContext } from 'react';

// Bus
import { useLinkAnchorRedux } from '../../../bus/client/linkAnchor';
import { useTogglesRedux } from '../../../bus/client/toggles';

// Context
import { ContextApp } from '../..';

// Container
import { ContainerScrollbar } from '../../containers';

// Elements
import { ItemNav, Link } from '../../elements';

// Styles
import * as S from './styles';

// Book
import { linkSidebar, TypeLinkSidebar } from '../../linkSidebar';


export const SideBar: FC = () => {
    const { refs } = useContext(ContextApp);
    const { togglesRedux, setToggleAction } = useTogglesRedux();
    const {
        setLinkAnchorAction,
    } = useLinkAnchorRedux();

    const onClickTitle = () => {
        if (refs) {
            refs.current = [];
            setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };
    const onClickSubtitle = (text: TypeLinkSidebar['text']) => {
        if (refs) {
            refs.current = [];
            const re = new RegExp(' ', 'g');
            const processedText = text.toLowerCase().replace(re, '-');
            setLinkAnchorAction(processedText);
            setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };

    return (
        <S.Container isOpenSidebar = { togglesRedux.isOpenSidebar }>
            <ContainerScrollbar style = {{ height: '100%', boxShadow: '0px 4px 0.5rem #9da5ab' }}>
                <S.Ul>
                    {
                        linkSidebar.map((element) => {
                            if (!element.subtitles) {
                                return (
                                    <li key = { element.path }>
                                        <ItemNav
                                            onclick = { onClickTitle }
                                            to = { element.path }>
                                            {element.text}
                                        </ItemNav>
                                    </li>
                                );
                            }

                            return (
                                <li key = { element.text }>
                                    <details>
                                        <summary>
                                            <ItemNav
                                                onclick = { onClickTitle }
                                                to = { element.path }>
                                                {element.text}
                                            </ItemNav>
                                        </summary>
                                        {element.subtitles.map(
                                            (el) => (
                                                <S.SubtitleNav key = { el.text }>
                                                    <Link
                                                        to = { element.path }
                                                        onClick = { () => onClickSubtitle(el.text) }>
                                                        {el.text}
                                                    </Link>
                                                </S.SubtitleNav>
                                            ),
                                        )}
                                    </details>
                                </li>
                            );
                        })
                    }
                </S.Ul>
            </ContainerScrollbar>
        </S.Container>
    );
};
