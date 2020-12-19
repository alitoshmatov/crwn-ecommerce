import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: "",
            password: "",
        });
    };

    handleChage = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        value={this.state.password}
                        type="password"
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
