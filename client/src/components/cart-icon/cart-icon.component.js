import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartDropdown, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <Icon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
    </div>
);

const mapStateToProps = (state) => ({
    itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
