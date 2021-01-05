import { takeEvery } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

function* fetchCollectionAsync() {
    yield console.log("SAGA fired");
}

export function* fetchCollectionStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_SHOP_COLLECTIONS_START,
        fetchCollectionAsync
    );
}
