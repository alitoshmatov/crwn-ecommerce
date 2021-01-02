import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { firestore, formatCollections } from "../../firebase/firebase.utils";
import { UpdateShopCollections } from "../../redux/shop/shop.actions";
import Collection from "../collection/collection.component";
import "./shop-page.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    state = {
        isLoading: true,
    };

    componentDidMount() {
        const collectionRef = firestore.collection("collections");
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot((snapshot) => {
            this.props.updateCollections(formatCollections(snapshot));
            this.setState({
                isLoading: false,
            });
        });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={isLoading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collection`}
                    render={(props) => (
                        <CollectionWithSpinner
                            isLoading={isLoading}
                            {...props}
                        />
                    )}
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
