const express = require("express");
const userAuth = require("../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");
const UserModel = require("../models/user");

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:userId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.userId;
      const status = req.params.status;

      //in this api only 2 status are allowed i.e "ignored" & "interested"

      const allowedStatus = ["ignored","interested"];

      if (!allowedStatus.includes(status)) {
        return res.status(404).json({ message: "Invalid Status!!!" });
      }

      //let's check that toUserId present in DB or not?
      
      const toUser = await UserModel.findById(toUserId);

      if (!toUser) {
        return res.status(404).send("Invalid User!!");
      }

      // basically checking weather the connection request exist or not

      const existingConnectionRequest = await ConnectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res.status(404).send("Connection Request already Exists!!");
      }
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
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);

requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      //Aditya sends request to => Ayush
      //logedInUser = toUserId
      //status = interested
      //req Id should be valid

      const loggedInUser = req.user;
      const { status, requestId } = req.params;

      //in req.params allowed status should be [accepted || rejected]

      const allowedStatus = ["accepted", "rejected"];

      if (!allowedStatus.includes(status)) {
        return res.status(400).send("!invalid status");
      }
     
      const connectionRequest = await ConnectionRequestModel.findOne({

        _id : requestId,
        toUserId : loggedInUser._id,
        status : "interested",

      });

      if(!connectionRequest){

        return res
                .status(400)
                .json({ message: "Connection request not found" });
      }

       connectionRequest.status = status;

       const data = await connectionRequest.save();

       res.json({
         message: "connection Request " + status,
       });


    } catch (error) {
      res.status(401).send("ERROR : " + error.message);
    }
  }
);

module.exports = requestRouter;
