const express = require("express");
const router = express.Router();
const UserController = require('../controller/userController');
const mainCatController = require("../controller/mainCatController");
const supCatController = require("../controller/supCatController");
const productController = require("../controller/ProductController");



//User : 
router.post('singUp',UserController.SingUp);
router.post('login',UserController.login);

//Main Category :
router.post("/createMainCat",mainCatController.createMainCat);
router.get("/getAllMainCat",mainCatController.getAll);
router.put("/updateMainCat",mainCatController.update);
router.delete("/deleteMainCat",mainCatController.delete);

//Second Category :
router.post("/createSupCat",supCatController.createSupCat);
router.get("/getallSupCat",supCatController.getall);
router.get("/getallCompaniesById",supCatController.getAllById);
router.put("/updateSupCat",supCatController.update);
router.delete("/deleteSupCat",supCatController.delete);

//Product page :
router.post("/createProducts",productController.CreateProduct);
router.get('getAllBySameUser',productController.getAllUserProducts)
router.get("/getallProduct",productController.getall);
router.get("/getByColor",productController.getByColor);
router.get("/getByMiles",productController.getByMiles);
router.get("/getByPrice",productController.getByPrice);
router.get("/getByYear",productController.getByYear);
router.get("/getById",productController.getById);//search
router.put("/updateProduct",productController.update);
router.delete("/deleteProduct",productController.delete);


module.exports = router;