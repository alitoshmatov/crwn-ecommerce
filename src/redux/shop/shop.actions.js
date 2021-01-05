import { firestore, formatCollections } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const FetchShopCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTIONS_START,
});

export const FetchCollectionsError = (e) => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTIONS_ERROR,
    payload: e,
});

export const FetchCollectionsSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTIONS_SUCCESS,
    payload: collections,
});

export const FetchShopCollectionsAsync = () => {
    return (dispatch) => {
        dispatch(FetchShopCollectionsStart());

        const collectionRef = firestore.collection("collections");
        collectionRef
            .get()
            .then((snapshot) =>
                dispatch(FetchCollectionsSuccess(formatCollections(snapshot)))
            )
            .catch((e) => dispatch(FetchCollectionsError(e)));
    };
};
