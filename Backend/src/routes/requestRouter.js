const express = require("express");
const userAuth = require("../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");
const UserModel = require("../models/user");

const requestRouter = express.Router();

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
