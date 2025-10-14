const validator = require("validator");

const validateSignUpData =  (req) => {

    const {firstName, lastName, emailId, password} = req.body;

    if (!firstName || !lastName) {
        throw new Error("❌ ! Name is not valid");
    }

    if (!emailId || !validator.isEmail(emailId)) {
        throw new Error("❌ ! Name is not valid");
    }

    if (!password || !validator.isStrongPassword(password)) {
        throw new Error("❌ ! Name is not valid");
    }

};

module.exports = {validateSignUpData};
