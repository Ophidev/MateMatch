const express = require("express");
const userAuth = require("../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");
const UserModel = require("../models/user");

const userRouter = express.Router();

const USER_SAFE_DATA =
  "firstName lastName photoUrl age gender budget location lifestyle about skills";

userRouter.get("/user/request/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequestModel.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", USER_SAFE_DATA);

    res.json({
      message: "Data fetched Successfully!",
      data: connectionRequests,
    });
  } catch (err) {
    res.status(400).send("❌ERROR : " + err.message);
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {

  const loggedInUser = req.user;

  //populate/getting the only USER_SAFE_DATA Fields where fromUserId == loggedInUser && status == "accepted",
  // OR populate toUserId == loggedInUser && status == "accepted",

  const connectionRequests = await ConnectionRequestModel.find({
    $or : [
       {fromUserId : loggedInUser._id, status : "accepted"},
       {toUserId : loggedInUser._id, status : "accepted"}
      ],
  })
  .populate("fromUserId",USER_SAFE_DATA)
  .populate("toUserId", USER_SAFE_DATA);

  // now due to the above logic to fetching all the connections we also 
  // we also get the loggedIn user as in the result so we don't want that
  //means -> in above we are populating data from the fromUserId and toUserId
  //so, because of it fromUserId may contain loggedInUser (fromUserID = loggedInUser data)
  // and toUserID may contain loggedInUser (toUserId = loggedInUser data)
  // we just want fromUserId or toUserId where loggedInUser not presents
    // so below is the logic to prevent it.

  const data = connectionRequests.map((row) => {

       if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
        //as we know we can't compare mongoose id directly so we convert them into Strings.

          return row.toUserId;
       }

       //else row.toUserId === loggedInUser._id
       return row.fromUserId;
  });

  res.json({ data });

});



//Now createing a GET/feed api to get all the user from the database by using the find() mongoose method
userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    
    const loggedInUser = req.user;

    //now let's write the logic of the pagination
    //So, pagination will help us to get just 10 data at once in out Api not all the users at once.
    // and when in the api query page and limit is given then this logic will give us another 10 users.

    const page = parseInt(req.query.page) || 1; //bydefault 1 if query not send 
    let limit = parseInt(req.query.limit) || 10; //bydefault 10 if query not send in the /feed route

    limit = limit > 50 ? 50 : limit; //if a client/user set limit more then 50 keep it 50 other wise the normal limit
                                     //because this can cost your DB, hang your DB if you have 1 lakh users and client want all at the time.

    const skip = (page-1)*limit; //formula to get the skip value so put in the skip() method

    // first get all the connectionRequests collection documents data where
    // fromUserId == loggedInUser._id or toUserId == loggedInUser._id

    const connectionRequests =  await ConnectionRequestModel.find({

      $or : [{fromUserId: loggedInUser._id},{toUserId: loggedInUser._id}],

    }).select("fromUserId toUserId"); // select() method is just used to get specefic fields 


    //now after getting all the requestConnections collection documents of the loggedInUser

    const hideUsersFromFeed  = new Set(); //creation of Set dataStructure which will not allow duplicate data


    //adding all the connectionRequests data in the set so it will eliminate the duplicate id's
    connectionRequests.forEach((req) => {

        hideUsersFromFeed.add(req.fromUserId.toString()); //converting id's into string because their datatypes is moongose.types.object_id of
        hideUsersFromFeed.add(req.toUserId.toString());
    })


    //now fetching the users from DB-: 
    //1st conditon => which are not in hideUsersFromFeed set (users collection documents id's not in hideUsersFromFeed);
    //2st condition => the loggedInUser document data should not their (users collection document id not equals to loggedInUser._id);
    // 1st condition and 2nd condition will get us the feed users.

    const feedUsers = await UserModel.find({

       $and: [
          {_id : {$nin : Array.from(hideUsersFromFeed)} },//$in is a array comparision operator so convertion set to array
          {_id : {$ne : loggedInUser._id} },
       ]
    })
    .select(USER_SAFE_DATA)
    .skip(skip)
    .limit(limit);

  //skip() & limit() are the methods to set the pagination logic in the data.
  
    res.send(feedUsers);
    
  } catch (err) {
    res.status(400).send(" ERROR : "+ err.message);
  }
});

module.exports = userRouter;