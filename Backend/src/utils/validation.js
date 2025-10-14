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

const validateEditProfileData = (req) => {
    const loggedInUser = req.user;
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
    const isEditAllowed = Object.keys(req.body).every((fields) => allowedFields.includes(fields));

    return isEditAllowed;
};

module.exports = {validateSignUpData,validateEditProfileData};
