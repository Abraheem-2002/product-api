const mongoose = require("mongoose")
const MainCatSchema = require("../schema/mainCatSchema");



const MainCatModel = mongoose.model("MainCategory",MainCatSchema);


module.exports = MainCatModel;