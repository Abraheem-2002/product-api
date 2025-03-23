const mongoose = require("mongoose")
const ProductSchema = require("../schema/productsSchema");



const ProductModel = mongoose.model("Products",ProductSchema);


module.exports = ProductModel;