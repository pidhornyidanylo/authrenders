require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`-----> connected to mongo`))
    .catch((err) => console.log(`Error occured while connecting to mongo`, err));

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        maxAge: 60000 * 30,
        httpOnly: true
    }
}));

app.use("/api/auth", require("./authRoute"));

app.get("/", (req, res) => {
    res.status(200).json({
        success: "You have successfully entered server ^)"
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`-----> server running on port ${PORT}`));