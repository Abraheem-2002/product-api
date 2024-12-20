const mongoose = require("mongoose")
const MainproSchema = require("../schema/mainproSchema");



const Mainpromodel = mongoose.model("Mainprodect",MainproSchema);


module.exports = Mainpromodel;