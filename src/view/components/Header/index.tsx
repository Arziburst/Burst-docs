// Core
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Assets
import burstLogo from '../../../assets/images/burst-logo.png';

// Data
import { DocumentationPages } from '../../pages/Docs/dataDocs';

// Constants
import { DOCS } from '../../../init';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Components
import { Search } from '../Search';

// Container
import { ContainerCenter, ContainerHoverScale, Wrapper } from '../../containers';

// Elements
import { Button, IconMenu, Link } from '../../elements';

// Styles
import * as S from './styles';

// Types
interface PropTypes extends React.HTMLAttributes<HTMLDivElement>  {}

export const Header: FC<PropTypes> = ({ ...props }) => {
    const [ isDocs, setIsDocs ] = useState(false);
    const { togglesRedux, setToggleAction } = useTogglesRedux();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const splittedPathname = pathname.split('/');

        const re = new RegExp(`^${DOCS}$`);

        if (splittedPathname.some((str) => re.test(str))) {
            setIsDocs(true);
        } else {
            setIsDocs(false);
        }

        return () => {
            setIsDocs(false);
        };
    }, [ pathname ]);

    const content = () => (
        <S.ContainerContent>
            <S.ContainerLogos>
                <ContainerCenter>
                    <S.ContainerLogo>
                        <Link
                            title = 'Burst'
                            to = '/'>
                            <ContainerHoverScale>
                                <S.ImageStyled
                                    alt = 'image burst-logo'
                                    animationDelay = '1s'
                                    src = { burstLogo }
                                />
                            </ContainerHoverScale>
                        </Link>
                    </S.ContainerLogo>
                </ContainerCenter>
                <ContainerCenter>
                    <a
                        href = 'https://github.com/Arziburst/Burst'
                        title = 'GitHub'>
                        <ContainerHoverScale>
                            <S.SvgStyled
                                animationDelay = '2s'
                                aria-hidden = 'true'
                                className = 'octicon octicon-mark-github v-align-middle'
                                data-view-component = 'true'
                                version = '1.1'
                                viewBox = '0 0 16 16'>
                                <path
                                    d = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
                                    fillRule = 'evenodd'>
                                </path>
                            </S.SvgStyled>
                        </ContainerHoverScale>
                    </a>
                </ContainerCenter>
                <ContainerCenter>
                    <a
                        href = 'https://www.npmjs.com/package/cra-template-burst'
                        title = 'npm'>
                        <ContainerHoverScale>
                            <S.SvgStyled
                                animationDelay = '3s'
                                preserveAspectRatio = 'xMidYMid'
                                version = '1.1'
                                viewBox = '0 0 256 256'
                                xmlns = 'http://www.w3.org/2000/svg'
                                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                                <g>
                                    <polygon
                                        fill = '#C12127'
                                        points = '0 256 0 0 256 0 256 256'
                                    />
                                    <polygon
                                        fill = '#FFFFFF'
                                        points = '48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208'
                                    />
                                </g>
                            </S.SvgStyled>
                        </ContainerHoverScale>
                    </a>
                </ContainerCenter>
            </S.ContainerLogos>

            {isDocs === true && (
                <ContainerCenter style = {{ height: '100%' }}>
                    <IconMenu
                        isOpen = { togglesRedux.isOpenSidebar }
                        onClick = { () => setToggleAction({ type: 'isOpenSidebar', value: !togglesRedux.isOpenSidebar }) }
                    />
                </ContainerCenter>
            ) }

            {isDocs === false && (
                <ContainerCenter>
                    <Button
                        variant = 'primary'
                        onClick = { () => navigate(`${DocumentationPages[ 0 ].option.navLink.path}`) }>
                        Documentation
                    </Button>
                </ContainerCenter>
            )}
        </S.ContainerContent>
    );


    if (isDocs === false) {
        return (
            <S.ContainerHeader
                style = {{ paddingLeft: 0, paddingRight: 0 }}
                { ...props }>
                <Wrapper>
                    {content()}
                </Wrapper>
            </S.ContainerHeader>
        );
    }

    return (
        <S.ContainerHeader { ...props }>
            {content()}
        </S.ContainerHeader>
    );
};
