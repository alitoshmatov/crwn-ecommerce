import React from "react";
import { connect } from "react-redux";
import {
    addItemToCart,
    reduceItemCount,
    removeItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItemCount }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="checkout item " />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={() => reduceItemCount(cartItem)}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItemFromCart(item)),
    addItem: (item) => dispatch(addItemToCart(item)),
    reduceItemCount: (item) => dispatch(reduceItemCount(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
