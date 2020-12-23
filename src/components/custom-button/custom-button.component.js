import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, signInGoogle, inverted, ...others }) => (
    <button
        className={`${inverted ? "inverted" : ""} ${
            signInGoogle ? "sign-in-google" : ""
        } custom-button`}
        {...others}
    >
        {children}
    </button>
);

export default CustomButton;
