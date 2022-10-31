// Core
import React, { FC } from 'react';

// Markdown
import md from './index.md';

// Components
import { ErrorBoundary, Markdown } from '../../components';

// Containers
import {
    ContainerScrollbar,
    ContainerSetHeightWithoutHeader,
    Main,
    Wrapper,
} from '../../containers';

// Styles
import * as S from './styles';

const Root: FC = () => {
    return (
        <ContainerScrollbar>
            <ContainerSetHeightWithoutHeader>
                <Main>
                    <Wrapper>
                        <S.ContainerWithShadowStyled>
                            <Markdown>
                                {md}
                            </Markdown>
                        </S.ContainerWithShadowStyled>
                    </Wrapper>
                </Main>
            </ContainerSetHeightWithoutHeader>
        </ContainerScrollbar>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
