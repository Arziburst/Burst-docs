// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
type InputSearch = string;

const initialState: InputSearch = '';

// Slice
export const inputSearchSlice = createSlice({
    name:     'inputSearch',
    initialState,
    reducers: {
        inputSearchCreator:        (state, action: PayloadAction<InputSearch>) => action.payload,
        resetInputSearchToInitial: () => initialState,
    },
});

// Interfaces
const inputSearch = inputSearchSlice.actions;
export default inputSearchSlice.reducer;

export const useInputSearchRedux = () => {
    const dispatch = useDispatch();

    return {
        inputSearchRedux: useSelector(({ inputSearch }) => inputSearch),
        setInputSearch:   (options: string) => {
            dispatch(inputSearch.inputSearchCreator(options));
        },
        resetInputSearchToInitial: () => void dispatch(inputSearch.resetInputSearchToInitial()),
    };
};
