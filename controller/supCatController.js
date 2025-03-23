const supCatModel = require("../model/supCatModel");

exports.createSupCat = async (req,res) => {
    try {
        const {companyName,mainCatId} = req.body
        if (!companyName || !mainCatId){
        return res.json({
            msg : "please fell the field !",
            stete : 0,
            data : [],
        })
        }
        await supCatModel.create({
            companyName : companyName,
            mainCatId : mainCatId,
        }).then((ourData)=>{
            return res.json({
                msg : "Your sup product has been created successfully",
                stete : 1,
                data : ourData
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
        const result = await supCatModel.find({})
        if(result){
        return res.json({
            msg : "this your sup product",
            stete : 1,
            data : result,
        })
        }else{
        return res.json({
            msg : "we cant find any main product with this id",
            stete : 0,
            data : [],
        })
        }
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "internal server error",
            stete : 1,
            data : [],
        })
    }
}
exports.getAllById = async (req,res) => {
    try {
    const id = req.query.id
    const ourResult = await supCatModel.find({mainCatId : id})
    if (ourResult){
        return res.json({
            msg : "this your sup product with id",
            stete : 1,
            data : ourResult,
        })
    }else {
        return res.json({
            msg : "we cant find any main product with this id",
            stete : 0,
            data : [],
        })
    }
    } catch (error) {
    console.log(error);
    return res.json({
        msg : "internal server error",
        stete : 1,
        data : [],
    })   
}   
}
exports.update = async (req,res) => {
    try {
        await supCatModel.findOneAndUpdate({_id:req.query.id},{
            companyName :req.body.companyName,
        }).then((result)=>{
        return res.json({
            msg : "your sup product has been updated",
            stete: 1,
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
        await supCatModel.findOneAndDelete({_id:req.query.id}).then(()=>{
            return res.json({
                msg : "your sup product has been deleted successfully",
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