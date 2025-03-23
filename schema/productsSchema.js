const mongoose = require("mongoose");
const schema = mongoose.Schema;


const ProductSchema = new schema ({
    productName : {
        type : String,
        required : [true,"This field required"],
    },
    description : {
        type : String,
        required : [true,"This field required"],
    },
    size : {
        type : Number
    },
    discount : {
        type : Number,
    },
    quantity : {
        type : Number,
        default : 10,
    },
    image : {
        type : String
    },
    price : {
        type : Number,
        required : [true,"This field required"],
    },
    supCatId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SupCategory',
        required : [true,"This field required"],
    },
    year : {
        type : Number
    },
    color : {
        type : String,
        required : [true,"This field required"],
    },
    miles : {
        type : Number
    },
    userId : {
        type : String,
        required : [true,"This field required"],
    }



})

module.exports = ProductSchema;