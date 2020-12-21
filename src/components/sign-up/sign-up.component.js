import React from "react";
import { auth, createProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onSubmit = async (e) => {
        e.preventDefault();
        const { email, password, displayName, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password did not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createProfileDocument(user, { displayName });

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div className="sign-up">
                <h1 className="title">I don't have an account</h1>
                <span>Sign up using your email and password</span>
                <form onSubmit={this.onSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        required
                        label="Display Name"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        required
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        required
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        required
                        label="Confirm Passowrd"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}
