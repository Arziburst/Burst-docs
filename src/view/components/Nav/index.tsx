// Core
import React, { FC, useContext } from 'react';

// Bus
import { useLinkAnchorRedux } from '../../../bus/client/linkAnchor';
import { useTogglesRedux } from '../../../bus/client/toggles';

// Containers
import { ContainerScrollbar } from '../../containers';

// Components
import { ItemNav, Details } from '../';

// Context
import { ContextApp } from '../..';

// Book
import Pages from '../../pages';

// Styles
import * as S from './styles';

// Types
import { TypesPage } from '../../pages/types';
interface PropTypes extends React.HTMLAttributes<HTMLMenuElement> {}

export const Nav: FC<PropTypes> = ({ ...props }) => {
    const { refs } = useContext(ContextApp);
    const { setToggleAction } = useTogglesRedux();
    const { setLinkAnchorAction } = useLinkAnchorRedux();

    const onClickTitle = () => {
        if (refs) {
            refs.current = [];
            setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };
    const onClickSubtitle = (text:  string) => {
        if (refs) {
            refs.current = [];
            const re = new RegExp(' ', 'g');
            const processedText = text.toLowerCase().replace(re, '-');
            setLinkAnchorAction(processedText);
            setToggleAction({ type: 'isOpenSidebar', value: false });
        }
    };


    return (
        <S.Container
            { ...props }>
            <ContainerScrollbar style = {{ height: '100%', boxShadow: '0px 4px 0.5rem #9da5ab' }}>
                <S.Ul>
                    {
                        Pages.map((element: TypesPage) => {
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
        </S.Container>
    );
};
