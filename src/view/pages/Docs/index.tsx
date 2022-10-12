// Core
import React from 'react';
import { animated, config, useTransition } from 'react-spring';
import { Routes, Route } from 'react-router-dom';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

import { DocumentationPages } from './dataDocs';

// Components
import { Nav, SideBar } from '../../components';

// Container
import { ContainerScrollbar } from '../../containers';

// Styles
import * as S from './styles';

export const Docs = () => {
    const { togglesRedux, setToggleAction } = useTogglesRedux();

    const transitions = useTransition(togglesRedux.isOpenSidebar, {
        from:   { opacity: 0 },
        enter:  { opacity: 1 },
        leave:  { opacity: 0 },
        config: config.slow,
    });

    const SDarkAreaAnimated = animated(S.DarkArea);


    return (
        <S.Container>
            <S.ContainerNav>
                <Nav />
            </S.ContainerNav>
            <ContainerScrollbar style = {{ position: 'relative' }}>
                {transitions(
                    (styles, item) => item && (
                        <SDarkAreaAnimated
                            style = { styles }
                            onClick = { () => setToggleAction({ type: 'isOpenSidebar', value: false }) }
                        />),
                )}
                <S.ContainerMain>
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
                </S.ContainerMain>
                <SideBar />
            </ContainerScrollbar>
        </S.Container>
    );
};
