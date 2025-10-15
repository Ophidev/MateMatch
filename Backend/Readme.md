b# Day 1
- HLD & LLD Design
- Folder Strcuture of Backend
- creating a database.js file to connect with MongoDB
- creating express server in app.js after connect to DB
- Created userSchema & UserModel in user.js > models 

# Day 2 part 1
- Added Script to packege.json file
- Created a validateSignUpData() in validation.js file>utils
- Start creation of authRouter.js file > POST/signup api
- using of bcrypt to Encrypt the password.
- then creation of userModel instance and added fields into it.
- using of scema.methods to create getJWT method
- getJWT()>using of jwt.sign to create jwt Token
- using res.cookie() to create cookie and embed Token into it.
- then using ModelInstance.save() method to save the data in DB
- then sending savedUser as a response.

# Day 2 part 2 
- Start creation of POST/login api
- geting the emailId and password from req.body
- then using findOne({emailId : emailId}) to get user
- if user is not found throw new Error else
- calling schema.methods.jsvalidatePassword(userInputPassword)
- validatePassword()>using of bcrypt.compare(userInputPassword,password)
- if isPasswordValid then schema.methods.getJWT() called
- res.cookie() sends cookie
- send user as in the response.<br></br>
- Now Start creation of POST/logout api
- just using res.cookie() sending null as token
- and expires the cokkie now expires : new Date(Date.now()).<br></br>
- Created ProfileRouter
- Created GET/profile/view api
- Created userAuth middleware in auth.js in middlewares folder
- userAuth() > getting Token from req.cookies 
- if(!Token) sending Error
- jwt.verify(Token,secretKey,{expiresIn:"1d"}) verifying Token
- using Model.findById(_id) and getting user
- if not user then throw Error
- then attached req.user = user 
- and at the last calling next() method.<br></br>
- Created GET/profile/view api
- getting the user from req.user attached by userAuth middleware
- then sending it as a response.


# Day 2 part 3
- created PATCH/profile/edit api
- first created validateEditProfileData(req) in validation.js < utils
    - getting the loggedInUser = req.User set by the userAuth
    - created - :

      ```js
      const allowedFields = [
        "firstName",
        "lastName",
        "age",
        "gender",
        "budget",
        "location",
        "lifestyle",
        "photoUrl",
        "about"
       ];

       ```
    - then check isEditAllowed by the logic of Object.keys()
    - and returning isEditAllowed variable<br></br>
- created PATCH/profile/edit api
    - first check validateEditProfileData(req) if not throw Error
    - get loggedInUser = req.user set by the userAuth middleware
    - Updating the loggedInUser -:

       ```js
        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
        ```
    - sending loggedInUser as a response.


# Day3 Part 1
- Created PATCH/profile/password api
    - This api is used to update the password of a user
    - get the loggedInUser = req.user set by userAuth middleware
    - get passwordHash = loggedInUser.password
    - get oldPassword & newPassword = req.body
    - using bcrypt.compare(oldPassword,passwordHash)
    - if not password valid then throw new Error else
    - generate new passwordHash using bcrypt.hash(newPassword,10)
    - update the loggedInUser.password = newpasswordHash
    - and loggedInUser.save() to database.

# Day3 Part 2
 - Created requestRouter.js file which contain requestRouter
 - Created POST/request/send/:status/:toUserId api
    - getting loggedInUser = req.user set by the userAuth middleware
    - getting fromUserId = loggedInUser._id, toUserId = req.params.toUserId
    - getting status = req.params.status
    - then write logic for allowedStatus
    - if !allowedStatus.includes(status) then res.status(404).send(ERROR)
    - else toUser = UserModel.findById(toUserId) find toUserId in DB
    - if !toUser res.status(404).send(ERROR)
    - else -:

        ```js

        const existingConnectionRequest =
            await ConnectionRequestModel.findOne({
              $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
              ],
            });
            
        ```
    - if existingconnectionRequest then res.status(404).send(ERROR)
    - else create Schema.pre("save",(next)) method in connectionRequst.js
    - which will check weather the user is not sending request to itself
    - then save data to DB 