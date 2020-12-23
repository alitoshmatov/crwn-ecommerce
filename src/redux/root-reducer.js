import { combineReducers } from "redux";
import setUserReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user: setUserReducer,
    cart: cartReducer,
});

export default rootReducer;
