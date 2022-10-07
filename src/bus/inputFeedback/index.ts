// Tools
import { useDispatch, useSelector } from '../../tools/hooks';

// Actions
import { inputFeedbackActions } from './slice';

// Types
import { InputFeedback } from './types';

export const useInputFeedback = () => {
    const dispatch = useDispatch();
    const inputFeedback = useSelector((state) => state.inputFeedback);

    return {
        inputFeedback,
        setInputsFeedback:   (inputs: InputFeedback) => dispatch(inputFeedbackActions.setInputsFeedback(inputs)),
        resetInputsFeedback: () => dispatch(inputFeedbackActions.resetInputsFeedback()),
    };
};
