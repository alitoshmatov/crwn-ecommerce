import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { FetchShopCollectionsAsync } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import Collection from "../collection/collection.component";
import "./shop-page.styles.scss";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        this.props.fetchCollection();
    }

    render() {
        const { match, isFetching } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={isFetching}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collection`}
                    render={(props) => (
                        <CollectionWithSpinner
                            isLoading={isFetching}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCollection: () => dispatch(FetchShopCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
