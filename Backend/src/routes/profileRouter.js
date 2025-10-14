const express = require("express");
const userAuth = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("❌ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid edit request!!!");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key])); //updating loggedInUser with the new data

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your Profile updated Successfuly!`,
      data: { loggedInUser },
    });
  } catch (err) {
    res.status(400).send("❌ERROR : " + err.message);
  }
});

module.exports = profileRouter;
