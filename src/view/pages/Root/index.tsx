// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../conponents';

// Styles
import * as S from './styles';

export const Root = () => {
    const navigate = useNavigate();

    return (
        <ErrorBoundary>
            <S.Container>
                Root here
                <button onClick={() => navigate('/navigate')}>Go to navigate</button>
            </S.Container>
        </ErrorBoundary>
    );
};
