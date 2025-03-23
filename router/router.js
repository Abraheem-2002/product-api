const express = require("express");
const router = express.Router();
const mainCatController = require("../controller/mainCatController");
const supCatController = require("../controller/supCatController");
const productController = require("../controller/ProductController");


router.post("/createmain",mainprocontroller.crearetmainfield);
router.get("/getbyid/:id",mainprocontroller.getsecondfield);
router.put("/update/:id",mainprocontroller.update);
router.delete("/delete/:id",mainprocontroller.delete);


router.post("/createsuppro",supprocontroller.createsecondfield);
router.get("/getall",supprocontroller.getall);
router.get("/getallbyid/:id",supprocontroller.getallbyid);
router.put("/updatesup/:id",supprocontroller.update);
router.delete("/deletesup/:id",supprocontroller.delete);


router.post("/craeteprodect",prodectcontroller.createprodect);
router.get("/getallprodect",prodectcontroller.getall);
router.get("/getbycolor/:id",prodectcontroller.getbycolor);
router.get("/getbymiles/:id",prodectcontroller.getbymiles);
router.get("/getbyprice/:id",prodectcontroller.getbyprice);
router.get("/getbyyear/:id",prodectcontroller.getbyyear);
router.get("/getid/:id",prodectcontroller.getallbyid);
router.put("/updatepro/:id",prodectcontroller.update);
router.delete("/deletepro/:id",prodectcontroller.delete);


module.exports = router;