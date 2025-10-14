# Day 1
- HLD & LLD Design
- Folder Strcuture of Backend
- creating a database.js file to connect with MongoDB
- creating express server in app.js after connect to DB
- Created userSchema & UserModel in user.js > models 

# Day 2
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
