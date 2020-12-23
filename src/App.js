import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component";
import { auth, createProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.action";

class App extends React.Component {
    unSubscribeFromAuth = null;
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        console.log(process.env);
        const { setCurrentUser } = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createProfileDocument(user);
                this.unSubscribeFromSnapshot = userRef.onSnapshot(
                    (snapshot) => {
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                        });
                    }
                );
            } else {
                setCurrentUser(user);
            }
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
        this.unSubscribeFromSnapshot();
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        path="/signin/:customer/:id"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
