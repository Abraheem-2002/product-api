const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    firstName : {
        type : String,
        required : [true,"This field required"],
    },
    lastName : {
        type : String,
        required : [true,"This field required"],
    },
    userName : {
        type : String,
        required : [true,"This field required"],
    },
    email : {
        type : String,
        required : [true,"This field required"],

    },
    password : {
        type : String ,
        required : [true,"This field required"],
    }
})

module.exports = userSchema;