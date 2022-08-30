// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLElement> {
    srcImage: string
    title: string
    href: string
}

// Styles
const ImageStyled = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

export const ImgAuthor: FC<PropTypes> = ({ srcImage, href, title, ...props }) => {
    return (
        <a
            href = { href }
            title = { title }
            { ...props }>
            <ImageStyled
                alt = { `Image author ${title}` }
                src = { srcImage }
            />
        </a>
    );
};
