import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const publisherKey =
        "pk_test_51I2L3bAJceYSrWzo61x3xo8OBdxePAVKPhKFWTK24Xn4PxvIYXSEuzAa1SaXHvgRDXnOVTVwT6suuklCLRhkF5dZ00vN7Ch5Ey";

    const onToken = (token) => {
        axios
            .post("/payment", {
                amount: price * 100,
                token,
            })
            .then((res) => {
                alert("Successiful payment");
            })
            .catch((e) => {
                console.log(e);
                alert("Unsuccesiful");
            });
    };

    return (
        <div>
            <StripeCheckout
                label="Pay Now"
                stripeKey={publisherKey}
                amount={price * 100}
                token={onToken}
                name="CRWN ltd."
            />
        </div>
    );
};

export default StripeCheckoutButton;
