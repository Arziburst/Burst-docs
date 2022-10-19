// Core
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { ContextApp } from '../..';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {}

export const ContainerSetHeightWithoutHeader: FC<PropTypes> = ({ children, ...props }) => {
    const { refHeader } = useContext(ContextApp);

    const refContainer: any = useRef(null);
    const [ heightContainer, setHeightContainer ] = useState(0);

    useEffect(() => {
        const changeHeight = () => {
            if (refHeader && refHeader.current && typeof refHeader.current.clientHeight === 'number') {
                setHeightContainer(window.innerHeight - refHeader.current.clientHeight);
            }
        };

        changeHeight();
        window.addEventListener('load', changeHeight);
        window.addEventListener('resize', changeHeight);

        return () => {
            window.removeEventListener('load', changeHeight);
            window.removeEventListener('resize', changeHeight);
        };
    }, []);

    return (
        <div
            ref = { refContainer }
            style = {{ height: `${heightContainer}px` }}
            { ...props }>
            {children}
        </div>
    );
};
