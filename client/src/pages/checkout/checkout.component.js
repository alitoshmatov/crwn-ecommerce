import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";
import {
    selectCartItems,
    selectTotalPrice,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, totalPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Name</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((item) => (
            <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className="total">${totalPrice}</div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
