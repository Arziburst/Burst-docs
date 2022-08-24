
// Core
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = null;

// Types
type Options = string;

// Slice
export const linkAnchorSlice = createSlice({
    name:     'linkAnchor',
    initialState,
    reducers: {
        linkAnchorCreatorAction:        (state, action) => action.payload,
        resetLinkAnchorToInitialAction: () => initialState,
    },
});

// Interfaces
const linkAnchorActions = linkAnchorSlice.actions;
export default linkAnchorSlice.reducer;

export const useLinkAnchorRedux = () => {
    const dispatch = useDispatch();

    return {
        linkAnchorRedux:     useSelector(({ linkAnchor }) => linkAnchor),
        setLinkAnchorAction: (options: Options) => {
            dispatch(linkAnchorActions.linkAnchorCreatorAction(options));
        },
        resetLinkAnchorToInitial: () => void dispatch(linkAnchorActions.resetLinkAnchorToInitialAction()),
    };
};
