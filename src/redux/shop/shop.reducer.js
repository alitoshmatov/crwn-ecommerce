import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: {},
    isFetching: false,
    error: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_SHOP_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ShopActionTypes.FETCH_SHOP_COLLECTIONS_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case ShopActionTypes.FETCH_SHOP_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default shopReducer;
