import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";
import "./shop-page.styles.scss";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collection`} component={Collection} />
    </div>
);

export default ShopPage;
