export const SET_CURRENT_QUESTION_INDEX = 'SET_CURRENT_QUESTION_INDEX';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const CLEAR_ALL_ANSWERS = 'CLEAR_ALL_ANSWERS';


export const setCurrentQuestionIndex = (index) => ({
  type: SET_CURRENT_QUESTION_INDEX,
  payload: index,
});

export const setUserAnswer = (index, answer) => ({
  type: SET_USER_ANSWER,
  payload: { index, answer },
});

export const clearAllAnswers = () => ({
    type: CLEAR_ALL_ANSWERS,
    payload: {},
  });
  

const initialState = {
  currentQuestionIndex: 0,
  userAnswers: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL_ANSWERS:
        return {...state, userAnswers: []};
    case SET_CURRENT_QUESTION_INDEX:
      return { ...state, currentQuestionIndex: action.payload };
    case SET_USER_ANSWER:
      const newUserAnswers = [...state.userAnswers];
      newUserAnswers[action.payload.index] = action.payload.answer;
      return { ...state, userAnswers: newUserAnswers };
    default:
      return state;
  }
};

export default questionReducer;