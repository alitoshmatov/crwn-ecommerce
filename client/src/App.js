import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component";
import { auth, createProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.action";
import Checkout from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const App = ({ setCurrentUser, currentUser }) => {
    useEffect(() => {
        let unSubscribeFromSnapshot;
        const unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createProfileDocument(user);
                unSubscribeFromSnapshot = userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(user);
            }
        });
        return () => {
            unSubscribeFromAuth();
            // unSubscribeFromSnapshot();
        };
    }, [setCurrentUser]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={Checkout} />
                <Route
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
            </Switch>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
