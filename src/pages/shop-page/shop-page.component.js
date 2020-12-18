import React from "react";
import SHOP_DATA from "./shop-page.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop-page.styles.scss";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {collections.map(({ id, ...others }) => (
                    <CollectionPreview key={id} {...others} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
