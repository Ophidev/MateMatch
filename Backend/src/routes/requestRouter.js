const express = require("express");
const userAuth = require("../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");
const UserModel = require("../models/user");

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allowedStatus = ["interested", "ignored"];

      if (!allowedStatus.includes(status)) {
        res.status(404).json({ message: "Invalid status type" });
      } else {
        //finding toUserId is in DB or not
        const toUser = await UserModel.findById(toUserId);

        if (!toUser) {
          res.status(404).json({ message: "!Invalid Request User not found" });
        } else {
          //checking weather the request already exists or not

          const existingConnectionRequest =
            await ConnectionRequestModel.findOne({
              $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
              ],
            });

          if (existingConnectionRequest) {
            res.status(404).send("Connection Request already Exists!!");
          } else {
            //Now before saving let also write logic for one more corner case ie. -:
            //IF a person sending connection request to itself
            //for that we will use the pre middleware or method given my the mongoose
            //which help us to write logic in it before the saving data in the database
            //for that go to the connectionRequest.js file where the connectionRequest Schema is created.

            const connectionRequestInstance = new ConnectionRequestModel({
              fromUserId,
              toUserId,
              status,
            });

            const data = await connectionRequestInstance.save();

            res.json({
              message:
                req.user.firstName +
                " send " +
                status +
                " status to : " +
                toUser.firstName,
              data: data,
            });
          }
        }
      }
    } catch (err) {
      res.status(400).send("❌ERROR : " + err.message);
    }
  }
);

module.exports = requestRouter;
