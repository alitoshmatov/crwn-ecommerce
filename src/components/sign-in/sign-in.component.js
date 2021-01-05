import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const { email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setCredentials({
                email: "",
                password: "",
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-in">
            <h1 className="title">I have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    value={password}
                    type="password"
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton signInGoogle onClick={signInWithGoogle}>
                        Sign In with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
