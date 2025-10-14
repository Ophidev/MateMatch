const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");


const userAuth = async (req, res, next) => {
  try {
    const { Token } = req.cookies;

    if (!Token) {
      throw new Error("Invalid Token!!");
    }

    const decodeObj = await jwt.verify(Token,process.env.JWT_SEKRET,{expiresIn : "1d"});

    const {_id} = decodeObj;

    const user = await UserModel.findById(_id);

    if(!user){
        throw new Error("!User not found");
    }

    req.user = user;
    next();

  } catch (err) {
    res.status(401).send("❌ ERROR : "+ err.message);
  }
};


module.exports = userAuth;