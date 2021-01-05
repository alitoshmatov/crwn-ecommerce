import React, { useState } from "react";
import { auth, createProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { email, password, displayName, confirmPassword } = credentials;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
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

            setCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="sign-up">
            <h1 className="title">I don't have an account</h1>
            <span>Sign up using your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    required
                    label="Display Name"
                    value={displayName}
                    handleChange={handleChange}
                />
                <FormInput
                    type="email"
                    name="email"
                    required
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    required
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    required
                    label="Confirm Passowrd"
                    value={confirmPassword}
                    handleChange={handleChange}
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
