import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, signInGoogle, ...others }) => (
    <button
        className={`${signInGoogle ? "sign-in-google" : ""} custom-button`}
        {...others}
    >
        {children}
    </button>
);

export default CustomButton;
