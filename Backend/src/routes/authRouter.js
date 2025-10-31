const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");
const UserModel = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = UserModel({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const Token = await user.getJWT();

    res.cookie("Token", Token, {
      httpOnly: true, // prevents client-side JS access
      secure: true, // ensures cookies are sent only over HTTPS
      sameSite: "none", // allows cross-site cookies (important for frontend-backend communication)
      expires: new Date(Date.now() + 8 * 3600000), // 8 hours
    });

    const savedUser = await user.save();

    res.json({
      message: "✅ user Saved Successfully!!!",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).send("❌ ERROR : " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await UserModel.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("User not found!!!");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const Token = await user.getJWT();

      res.cookie("Token", Token, {
        httpOnly: true, // prevents client-side JS access
        secure: true, // ensures cookies are sent only over HTTPS
        sameSite: "none", // allows cross-site cookies (important for frontend-backend communication)
        expires: new Date(Date.now() + 8 * 3600000), // 8 hours
      });

      res.json({ message: "✅ Login Successfuly!", data: user });
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (err) {
    res.status(400).send("❌Error : " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  try {
    res
      .cookie("Token", null, {
        expires: new Date(Date.now()),
      })
      .send("✅ Logout Successfuly!");
  } catch (err) {
    res.status(400).send("❌Error" + err.message);
  }
});

module.exports = authRouter;
