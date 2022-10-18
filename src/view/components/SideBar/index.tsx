// Core
import React, { FC } from 'react';
import { animated, config, useTransition } from 'react-spring';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Components
import { Nav } from '../';

export const SideBar: FC = () => {
    const { togglesRedux } = useTogglesRedux();

    const transitions = useTransition(togglesRedux.isOpenSidebar, {
        from:   { position: 'fixed', left: 0, bottom: 0, opacity: 0, transform: 'translateX(-100%)', width: '300px' },
        enter:  { opacity: 1, transform: 'translateX(0%)' },
        leave:  { opacity: 0, transform: 'translateX(-100%)' },
        // update: () => ({ height: main }),
        config: config.slow,
    });

    const NavAnimated = animated(Nav);

    return transitions(
        (styles: object, item) => item && <NavAnimated style = { styles } />,
    );
};
