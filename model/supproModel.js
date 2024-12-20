const mongoose = require("mongoose")
const supproSchema = require("../schema/supproSchema");



const supproModel = mongoose.model("secondpro",supproSchema);


module.exports = supproModel;