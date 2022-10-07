// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type InputFeedback = {
    name: string
    email: string
    feedback: string
}
export type InputFeedbackState = InputFeedback | null

// Contracts
export type BaseContact<T = any> = CaseReducer<InputFeedbackState, PayloadAction<T>>
