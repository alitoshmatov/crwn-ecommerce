import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {
    HeaderContainer,
    LogoContainer,
    Option,
    Options,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <Options>
            <Option to="/shop">SHOP</Option>
            <Option to="/shop">CONTACT</Option>
            {currentUser ? (
                <Option
                    as="div"
                    onClick={() => {
                        auth.signOut().then(() => console.log(currentUser));
                    }}
                >
                    SIGN OUT
                </Option>
            ) : (
                <Option to="/signin">SIGN IN</Option>
            )}
            <CartIcon />
        </Options>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
