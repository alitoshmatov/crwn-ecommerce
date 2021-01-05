import { combineReducers } from "redux";
import setUserReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["cart"],
};
const rootReducer = combineReducers({
    user: setUserReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
