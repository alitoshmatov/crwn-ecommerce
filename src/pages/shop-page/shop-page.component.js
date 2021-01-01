import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { firestore, formatCollections } from "../../firebase/firebase.utils";
import { UpdateShopCollections } from "../../redux/shop/shop.actions";
import Collection from "../collection/collection.component";
import "./shop-page.styles.scss";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot((snapshot) => {
            this.props.updateCollections(formatCollections(snapshot));
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverview}
                />
                <Route
                    path={`${match.path}/:collection`}
                    component={Collection}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) =>
        dispatch(UpdateShopCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
