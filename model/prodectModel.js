const mongoose = require("mongoose")
const ProdectSchema = require("../schema/productsSchema");



const prodectModel = mongoose.model("prodects",ProdectSchema);


module.exports = prodectModel;