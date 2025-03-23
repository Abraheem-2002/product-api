const mongoose = require("mongoose")
const supCatSchema = require("../schema/supCatSchema");



const supCatModel = mongoose.model("SupCategory",supCatSchema);


module.exports = supCatModel;