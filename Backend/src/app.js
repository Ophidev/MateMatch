const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();



app.use("/",(req,res) => {

    res.send("Namaste MateMatch🙏");
});

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