// Core
import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { ItemNav } from '../';

// Styles
import * as S from './styles';

// Types
import { TypeLinkSidebar } from '../../linkSidebar';

type PropTypes = {
    element: TypeLinkSidebar
    onClickTitle: Function
    onClickSubtitle: Function
}

export const Details: FC<PropTypes> = ({ element, onClickTitle, onClickSubtitle,  ...props }) => {
    const { pathname } = useLocation();

    const [ isOpen, setIsOpen ] = useState(false);
    const [ wasOpen, setWasOpen ] = useState(false);

    return (
        <ul
            { ...props }>
            <S.Title>
                <S.Marker
                    isActive = { element.path === pathname }
                    isOpen = { isOpen }
                    wasOpen = { wasOpen }
                    onClick = { () => {
                        setIsOpen(!isOpen);
                        setWasOpen(true);
                    } }
                />
                <ItemNav
                    define
                    onclick = { onClickTitle }
                    to = { element.path }
                    variant = 'h2'>
                    {element.text}
                </ItemNav>
            </S.Title>
            {isOpen && (
                <S.Body>
                    {element.subtitles && element.subtitles.map(
                        (el) => (
                            <li>
                                <ItemNav
                                    key = { el.text }
                                    onclick = { () => onClickSubtitle(el.text) }
                                    to = { element.path }
                                    variant = 'h3'>
                                    {el.text}
                                </ItemNav>
                            </li>
                        ),
                    )}
                </S.Body>
            )}
        </ul>
    );
};
