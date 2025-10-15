const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/AuthRouter");
const profileRouter = require("./routes/profileRouter");
const requestRouter = require("./routes/requestRouter");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);

connectDB()
.then (() => {

    console.log("✅Connected to DB");

    app.listen(7777, () => {

        console.log("✅ Server Started at : 7777");

    });
})
.catch ((err) => {

    console.log("Not connect to DB ! ERROR : ", err.message);
})