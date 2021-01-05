import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsArray } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...others }) => (
            <CollectionPreview key={id} {...others} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsArray,
});

export default connect(mapStateToProps)(CollectionOverview);
