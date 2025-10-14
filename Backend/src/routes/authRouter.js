const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");
const UserModel = require("../models/user");


const authRouter = express.Router();

authRouter.post("/signup", async (req,res) => {
    try{
    
        validateSignUpData(req);
        const {firstName, lastName, emailId, password} = req.body;

        const passwordHash = await bcrypt.hash(password,10);

        const user = UserModel({
            firstName,
            lastName,
            emailId,
            password: passwordHash
        });

        const Token = await user.getJWT();
        console.log(req.body);
        
        res.cookie("Token",Token,{
            expires : new Date(Date.now() + 8 + 3600000)
        });

        const savedUser = await user.save();

        res.json(
            {
                message : "✅ user Saved Successfully!!!",
                data : savedUser
            }
        );

    }
    catch(err){
        res.status(400).send("❌ ERROR : " + err.message);
    }
});

module.exports = authRouter;