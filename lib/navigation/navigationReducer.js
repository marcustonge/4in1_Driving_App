import { NAVIGATE, PUSH, POP } from './navigationActions';

const initialState = {
  currentRoute: null,
  stack: [],
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        currentRoute: action.payload.routeName,
      };
    case PUSH:
      return {
        ...state,
        stack: [...state.stack, action.payload],
        currentRoute: action.payload.routeName,
      };
    case POP:
      const newStack = state.stack.slice(0, -1);
      const newCurrentRoute = newStack.length > 0 ? newStack[newStack.length - 1].routeName : null;
      return {
        ...state,
        stack: newStack,
        currentRoute: newCurrentRoute,
      };
    default:
      return state;
  }
};

export default navigationReducer;