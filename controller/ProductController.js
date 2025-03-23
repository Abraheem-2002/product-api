const ProductModel = require("../model/ProductModel");

exports.CreateProduct = async (req,res) => {
    try {
        const {productName,description,quantity,image,price,supCatId,year,color,miles,userId} = req.body;
            
        if(!productName || !description|| !price || !supCatId || !year || !color || !userId){
            return res.json({
                msg : "please fell the field",
                stete : 0,
                data : [],
            })
        }
        await ProductModel.create({
            productName : productName,
            description : description,
            image : image,
            quantity : quantity,
            price : price,
            supCatId : supCatId,
            year : year,
            color :color,
            miles : miles,
            userId : userId,
        }).then((database)=>{
        return res.json({
            msg : "Your product has been created successfully",
            stete : 1,
            data : database,
        })
        }).catch((err)=>{
            console.log(err);
            return res.json({
                msg : "internal server error",
                stete : 0,
                data : [],
            })
        })    
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
    
}
exports.getall = async (req,res) => {
    try {
        const result = await ProductModel.find({}).populate('supCatId')
    if(result){
        return res.json({
            msg : "",
            stete : 1,
            data : result,
        })   
    }else{
    return res.json({
        msg : "There is no products",
        stete : 0,
        data : [],
    })
    }
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })   
    }
}
exports.getById = async (req,res) => {
    try {
    const id = req.query.id
    const ReturnResult = await ProductModel.find({supCatId:id}).populate('supCatId')
    if (ReturnResult){
        return res.json({
            msg : "That is all Your products in your Brand",
            stete : 1,
            data : ReturnResult,
    })}else{
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    } 
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
    
}
exports.getAllUserProducts = async(req,res)=>{
    try {
        const id = req.query.id;
        await ProductModel.find({userId : id}).populate('supCatId').then((data)=>{
        console.log(data);
        return res.status(200).send({
            msg : '',
            stete : 1,
            data : data,
        })
        }).catch((err)=>{
            console.log(err);
            return res.status(500).send({
                msg : 'internal server error',
                stete : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            msg : 'internal server error',
            stete : 0,
            data : []
        })
    }
}
exports.getByYear = async(req,res) => {
    try {
        const id = req.query.id;
        const {year} = req.body;
        const result = await ProductModel.find({
            supCatId : id,
            year : year,
            
        }
        )
        if(result){
            return res.json({
                msg : "Great that's all products with this year",
                state : 1,
                data : result
            })
        }else{
            return res.json({
                msg : "something wrong",
                stete : 0,
                data : [],
            })
        }
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
}
exports.getByColor = async(req,res) => {
    try {
        const id = req.query.id;
        const {color} = req.body;
        await ProductModel.find({supCatId : id,
            color : color,
        }).then((data)=>{
        return res.json({
            msg : "that's all products with this color",
            stete : 1,
            data : data
        }).catch((err) => {
            console.log(err);
            res.json({
                msg : "products wrong",
                stete :0,
                data : [],
            })
        })
        })    
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
    
}
exports.getByMiles = async(req,res) => {
    try {
        const id = req.query.id;
        const {miles} = req.body;
    
        await ProductModel.find({supCatId : id,
            miles : miles,
        }).then((data)=>{
            return res.json({
                msg : "that's all products with this miles",
                stete : 1,
                data : data,
            }).catch((err) =>{
                console.log(err);
                return res.json({
                    msg : "something wrong",
                    stete : 0,
                    data :[],
                })
            })
    
        })    
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    }
    
}
exports.getByPrice = async(req,res) => {
    try {
        const id = req.query.id;
        const {price} =req.body;
        await ProductModel.find({supCatId : id,
            price : price,
        }).then((data) =>{
            return res.json({
                msg : "that's all products with this price",
                stete : 1,
                data : data,
            })
        }).catch((err) =>{
            console.log(err);
            return res.json({
                msg : "something wrong",
                stete :0,
                data :[],
            })            
        })
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data :[],
        })
    }
}
exports.update = async (req,res) => {
    try {
        await ProductModel.findOneAndUpdate({_id:req.query.id},{
            $or :{
                productName : req.body.productName,
                description : req.body.description,
                quantity :req.body.quantity,
                price : req.body.price,
                miles : req.body.miles,
                color : req.body.color,
            }
        }).then((result)=>{
        return res.json({
            msg : "your products has been updated",
            stete:1,
            data : result
        }).catch(()=>{
            res.json({
                msg : "something wrong",
                stete: 0,
                data : [],
            })
        })

        })
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })       
    }
}
exports.delete = async (req,res) =>{
try {
    await ProductModel.findOneAndDelete({_id:req.query.id}).then(()=>{
        return res.json({
            msg : "your products has been deleted successfully",
            stete : 1,
            data : [], 
        })
    }).catch(()=>{
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
    })
} catch (error) {
    console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
        })
}   
}