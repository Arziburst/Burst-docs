// Core
import React, { useEffect } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Routes, Route } from 'react-router-dom';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

import { DocumentationPages } from './dataDocs';

// Components
import { Nav, SideBar } from '../../components';

// Container
import {
    ContainerScrollbar,
    ContainerSetHeightWithoutHeader,
    Main,
} from '../../containers';

// Styles
import * as S from './styles';

export const Docs = () => {
    const { togglesRedux, setToggleAction } = useTogglesRedux();


    const transitionsDarkAreaAnimated = useTransition(togglesRedux.isOpenSidebar, {
        from:   { opacity: 0, display: 'none' },
        enter:  { opacity: 1, display: 'block' },
        leave:  { opacity: 0, display: 'none' },
        config: config.slow,
    });
    const SDarkAreaAnimated = animated(S.DarkArea);

    useEffect(() => {
        return () => {
            setToggleAction({ type: 'isOpenSidebar', value: false });
        };
    }, []);

    return (
        <S.Container>
            <S.ContainerNav>
                <Nav />
            </S.ContainerNav>
            <ContainerScrollbar>
                {transitionsDarkAreaAnimated(
                    (styles, item) => item && (
                        <SDarkAreaAnimated
                            style = { styles }
                            onClick = { () => setToggleAction({ type: 'isOpenSidebar', value: false }) }
                        />),
                )}
                <ContainerSetHeightWithoutHeader>
                    <Main>
                        <Routes>
                            {DocumentationPages.map((element, index) => {
                                const Component: any = element.ComponentLazy;

                                return (
                                    <Route
                                        element = { <Component /> }
                                        key = { index }
                                        path = { element.option.rootRoutePath }
                                    />
                                );
                            })}
                        </Routes>
                    </Main>
                </ContainerSetHeightWithoutHeader>
                <SideBar />
            </ContainerScrollbar>
        </S.Container>
    );
};
