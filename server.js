import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import stripe from "stripe";

if (process.env.NODE_ENV !== "production") dotenv.config();

const initializedStripe = stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

app.listen(port, (e) => {
    if (e) console.log(e);
    console.log("Server is up and running on port " + port);
});

app.post("/payment", (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    };
    initializedStripe.charges.create(body, (e, stripeRes) => {
        if (e) {
            res.status(500).send({ error: e });
        } else {
            res.status(200).send({ message: stripeRes });
        }
    });
});
