import { combineReducers } from "redux";
import setUserReducer from "./user/user.reducer";
import { toggleCartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user: setUserReducer,
    cart: toggleCartReducer,
});

export default rootReducer;
