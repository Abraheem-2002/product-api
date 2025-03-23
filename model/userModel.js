const mongoose = require("mongoose")
const userSchema = require('../schema/userSchema')

const userModel = mongoose.model('Users',userSchema)

module.exports =userModel;