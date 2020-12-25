import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const Collection = ({ collection: { title, items } }) => {
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const stateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collection)(state),
});

export default connect(stateToProps)(Collection);
