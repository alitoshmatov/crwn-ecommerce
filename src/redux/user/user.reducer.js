import UserActionTypes from "./user.types";

const INITIALIZE_USER = {
    currentUser: null,
};

const setUserReducer = (state = INITIALIZE_USER, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default setUserReducer;
