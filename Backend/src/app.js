const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
      
const authRouter = require("./routes/AuthRouter");
const profileRouter = require("./routes/profileRouter");
const requestRouter = require("./routes/requestRouter");
const userRouter =  require("./routes/userRouter");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("✅Connected to DB");

    app.listen(7777, () => {
      console.log("✅ Server Started at : 7777");
    });
  })
  .catch((err) => {
    console.log("Not connect to DB ! ERROR : ", err.message);
  });
