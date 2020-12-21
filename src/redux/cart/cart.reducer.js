import CartActionTypes from "./cart.types";

const INITIALIZE_CART = {
    hidden: true,
};

export const toggleCartReducer = (state = INITIALIZE_CART, action) => {
    switch (action.type) {
        case CartActionTypes.ToggleCartDropdown:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state;
    }
};
