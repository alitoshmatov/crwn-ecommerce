import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item,
});

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
});

export const reduceItemCount = (item) => ({
    type: CartActionTypes.REDUCE_ITEM_COUNT,
    payload: item,
});
