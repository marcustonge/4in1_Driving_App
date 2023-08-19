const initialState = {
    navigationBarData: [], // Initial state
    activeTab: '', // Keeps track of the active tab in nav bar
};

// ACTION TYPES for this reducer
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';


// ACTIONS
export const setActiveTab = (tabName) => {
    return {
        type: SET_ACTIVE_TAB,
        payload: tabName,
    }
}

const navigationbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab: action.payload,
            }
        default:
            return state;
    }
};


export default navigationbarReducer;