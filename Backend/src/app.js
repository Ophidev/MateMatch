const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const initializeSocket = require("./utils/socket.js");

require("dotenv").config();

const http = require("http");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://matematch-frontend.onrender.com", // your deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // allows cookies and headers
  })
);

app.use(express.json());
app.use(cookieParser());

// Routers
const authRouter = require("./routes/authRouter.js");
const profileRouter = require("./routes/profileRouter");
const requestRouter = require("./routes/requestRouter");
const userRouter = require("./routes/userRouter");
const chatRouter = require("./routes/Chat.js");



app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/",chatRouter);

const server = http.createServer(app);
// ✅ Add this route at the very end
app.get("/", (req, res) => {
  res.send("🚀 MateMatch Backend is Live and Connected to MongoDB!");
});

initializeSocket(server);

connectDB()
  .then(() => {
    console.log("✅ Connected to DB");

    server.listen(process.env.PORT || 7777, () => {
      console.log("✅ Server Started ");
    });
  })
  .catch((err) => {
    console.log("❌ Not connected to DB! ERROR:", err.message);
  });
