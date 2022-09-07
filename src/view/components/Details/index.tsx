// Core
import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { ItemNav } from '../';

// Styles
import * as S from './styles';

// Types
import { TypesPage } from '../../pages/types';

type PropTypes = {
    element: TypesPage['option']
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
                    isActive = { element.navLink.path === pathname }
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
                    to = { element.navLink.path }
                    variant = 'h2'>
                    {element.navLink.textLink.text}
                </ItemNav>
            </S.Title>
            {isOpen && (
                <S.Body>
                    {element.navLink.subtitles && element.navLink.subtitles.map(
                        (el) => (
                            <li key = { el.id }>
                                <ItemNav
                                    onclick = { () => onClickSubtitle(el.text) }
                                    to = { element.navLink.path }
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
