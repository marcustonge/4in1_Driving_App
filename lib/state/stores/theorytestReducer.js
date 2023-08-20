export const startTimer = () => {
    return { type: 'START_TIMER' };
};

export const nextQuestion = () => {
    return { type: 'NEXT_QUESTION' };
};

const initialState = {
    timer: 0,
    currentQuestionIndex: 0,
};

const theorytestReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return { ...state, timer: state.timer + 1 };
        case 'NEXT_QUESTION':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        default:
            return state;
    }
};

export default theorytestReducer;
