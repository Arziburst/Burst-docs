// Core
import React, { FC } from 'react';

// Bus
import { useAuthorsGitHub } from '../../../../bus/authorsGitHub';

// Containers
import { ContainerHoverScale } from '../../../containers';

// Components
import { ErrorBoundary, FormFeedback } from '../../../components';

// Elements
import { ImgAuthor } from '../../../elements';

// Styles
import * as S from './styles';

// Types
import { AuthorGitHub } from '../../../../bus/authorsGitHub/types';

const Component: FC = () => {
    const { authorsGitHub } = useAuthorsGitHub();

    return (
        <S.Container>
            <S.ContainerContent>
                <S.Title>Feedback</S.Title>
                <S.ContainerBody>
                    <FormFeedback />
                </S.ContainerBody>
                <S.ContainerAuthors>
                    {authorsGitHub && authorsGitHub.map((author: AuthorGitHub) => (
                        <ContainerHoverScale key = { author.id }>
                            <ImgAuthor
                                href = { author.html_url }
                                srcImage = { author.avatar_url }
                                title = { author.login }
                            />
                        </ContainerHoverScale>
                    ))}
                </S.ContainerAuthors>
            </S.ContainerContent>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Component />
    </ErrorBoundary>
);
