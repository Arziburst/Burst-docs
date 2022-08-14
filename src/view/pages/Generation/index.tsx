// Core
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../conponents';

// Styles
import * as S from './styles';

export const Generation = () => {
    const navigate = useNavigate();

    return (
        <ErrorBoundary>
            <S.Container>
                Generation here
                <button onClick={() => navigate('/')}>Go to navigate</button>
            </S.Container>
        </ErrorBoundary>
    );
};
