const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema({

    fromUserId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    toUserId : {

        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },

    status : {

        type : String,
        required : true,
        enum : {
            values : ['interested','ignored','accepted','rejected'],
            message : `{VALUE} invalid status type!!!`
        }
    }
},{timestamps:true});

//below is the use of Schema.pre() method 
// "save" act as event listener that before saving the data into db run this function
//and remember use only the function created with the "function " keyword dont use the arrow functions.

connectionRequestSchema.pre("save", function (next) {
    const connectionRequest = this;

    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error ("You Cannot send request to yourself!");
    }

    next();
});

const ConnectionRequestModel = new mongoose.model("ConnectionRequest",connectionRequestSchema);

module.exports = ConnectionRequestModel;