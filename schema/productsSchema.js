const mongoose = require("mongoose");
const schema = mongoose.Schema;


const prodectSchema = new schema ({
    prodectname : {
        type : String
    },
    descripition : {
        type : String
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
        type : Number
    },
    supproid : {
        type : String
    },
    year : {
        type : Number
    },
    color : {
        type : String
    },
    miles : {
        type : Number
    },



})

module.exports = prodectSchema;