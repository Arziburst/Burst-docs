// Core
import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Elements
import { ItemNav, Link } from '../../elements';

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
        <S.Details
            isActive = { element.path === pathname }
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
                    onclick = { onClickTitle }
                    to = { element.path }>
                    {element.text}
                </ItemNav>
            </S.Title>
            {isOpen && (
                <S.Body>
                    {element.subtitles && element.subtitles.map(
                        (el) => (
                            <S.Subtitle key = { el.text }>
                                <Link
                                    to = { element.path }
                                    onClick = { () => onClickSubtitle(el.text) }>
                                    {el.text}
                                </Link>
                            </S.Subtitle>
                        ),
                    )}
                </S.Body>
            )}
        </S.Details>
    );
};
