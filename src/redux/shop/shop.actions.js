import ShopActionTypes from "./shop.types";

export const UpdateShopCollections = (collections) => ({
    type: ShopActionTypes.UPDATE_SHOP_COLLECTIONS,
    payload: collections,
});
