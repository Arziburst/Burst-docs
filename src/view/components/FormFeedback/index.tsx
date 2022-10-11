// Core
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Utils
import { validateEmail } from '../../../tools/utils';

// Bus
import { useInputFeedback } from '../../../bus/inputFeedback';

// Containers
import { ContainerCenter } from '../../containers';

// Styles
import * as S from './styles';

// Types
import { InputFeedback } from '../../../bus/inputFeedback/types';


export const FormFeedback: FC = () => {
    const { setInputsFeedback, resetInputsFeedback } = useInputFeedback();
    const { register, handleSubmit, watch, getValues, reset, formState: { errors }} = useForm<InputFeedback>({
        mode: 'onSubmit',
    });

    useEffect(() => {
        setInputsFeedback({
            name:     getValues('name'),
            email:    getValues('email'),
            feedback: getValues('feedback'),
        });
    }, [
        watch('name'),
        watch('email'),
        watch('feedback'),
    ]);

    const onSubmit = () => {
        console.log('Send feedback');
        resetInputsFeedback();
        reset();
    };

    const errorMessageRequired = 'Field must be filled';

    return (
        <S.Form
            onSubmit = { handleSubmit(onSubmit) }>
            <S.ContainerInputs>
                <div>
                    <S.Input
                        { ...register('name', { required: errorMessageRequired }) }
                        error = { !!errors.name }
                        placeholder = 'Your name'
                        type = 'text'
                    />
                    {errors.name && <S.ErrorTextForInput>{errors.name.message}</S.ErrorTextForInput>}
                </div>
                <div>
                    <S.Input
                        error = { !!errors.email }
                        { ...register('email', {
                            required: errorMessageRequired,
                            validate: () => validateEmail(getValues('email')) ? true : 'Incorrect email',
                        }) }
                        placeholder = 'Your email'
                        type = 'text'
                    />
                    {errors.email && <S.ErrorTextForInput>{errors.email.message}</S.ErrorTextForInput>}
                </div>
            </S.ContainerInputs>
            <div>
                <S.Textarea
                    error = { !!errors.feedback }
                    { ...register('feedback', { required: errorMessageRequired }) }
                    placeholder = 'Your question or feedback'
                />
                {errors.feedback && <S.ErrorTextForInput>{errors.feedback.message}</S.ErrorTextForInput>}
            </div>
            <ContainerCenter>
                <S.Submit variant = 'primary'>Send</S.Submit>
            </ContainerCenter>
        </S.Form>
    );
};
