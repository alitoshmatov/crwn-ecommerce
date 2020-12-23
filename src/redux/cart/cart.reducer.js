import CartActionTypes from "./cart.types";
import { groupItemsInCart } from "./cart.utils";

const INITIALIZE_CART = {
    hidden: true,
    cartItems: [],
};

export const cartReducer = (state = INITIALIZE_CART, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: groupItemsInCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};
