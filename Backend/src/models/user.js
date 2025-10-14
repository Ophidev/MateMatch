const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 50,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error("invalid EmailId !!");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate: (value) => {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter Strong password !!");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 35,
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "others"],
        message: `{VALUE} is not valid gender type`,
      },
    },
    budget: {
      type: Number,
      min: 1000,
      max: 100000,
    },
    location: {
      type: String,
      minLength: 5,
      maxLength: 200,
      trim: true,
    },
    lifestyle: {
      sleepSchedule: {
        type: String,
        enum: ["early bird", "night owl", "flexible"],
        default: "flexible",
      },
      cleanliness: {
        type: String,
        enum: ["tidy", "moderate", "casual"],
        default: "moderate",
      },
      hobbies: {
        type: [String],
        validate: {
          validator: function (arr) {
            return arr.length <= 10; // Optional: max 10 hobbies
          },
          message: "You can list up to 10 hobbies only",
        },
        default: [],
      },
      smoking: {
        type: Boolean,
        default: false,
      },
      pets: {
        type: Boolean,
        default: false,
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg",
      validate: (value) => {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo URL! : " + value);
        }
      },
    },
    about: {
      type: String,
      default: "This is a default About of user...",
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  try {
  const user = this;

  const Token = await jwt.sign({_id : user?._id},process.env.JWT_SEKRET)

  return Token;
  }catch(err){
    throw new Error("Error in generating Token");
  }
};

userSchema.methods.validatePassword = async function (userInputPassword) {
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(userInputPassword,passwordHash);

    return isPasswordValid;
};

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;