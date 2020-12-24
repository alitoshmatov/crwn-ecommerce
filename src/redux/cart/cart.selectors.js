import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumilatedValue, item) => accumilatedValue + item.quantity,
            0
        )
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumilatedValue, item) =>
            accumilatedValue + item.quantity * item.price,
        0
    )
);
