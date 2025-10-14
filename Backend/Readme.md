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
- and expires the cokkie now expires : new Date(Date.now()).

