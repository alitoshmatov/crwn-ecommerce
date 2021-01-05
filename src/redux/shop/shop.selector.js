const { createSelector } = require("reselect");

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsArray = createSelector(
    [selectShopCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (name) =>
    createSelector([selectShopCollections], (collections) => collections[name]);

export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);
