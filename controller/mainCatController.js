const MainCatModel = require("../model/mainCatModel");

exports.createMainCat = async (req,res) => {
    try {
        const mainName = req.body.mainName;
        const image = req.body.image;
        if (!mainName ){
            return res.json({
                msg : "please enter the name !",
                stete : 0,
                data : [],
            })
        }
        await MainCatModel.create({
            mainName : mainName,
            image : image,
        }).then((ourData)=> {
            return res.json({
            msg : "Thank you to create your brand",
            stete : 1,
            data : ourData
            })
        }).catch((err)=>{
            console.log(err);
            res.json({
            msg : "internal server error",
            stete : 0,
            data : [],
            })
        })
    } catch (error) {
        console.log(error);
    }
}
exports.getAll = async(req,res) =>{
    try {
        await MainCatModel.find({}).then((data)=>{
        console.log(data);
        return res.status(200).send({
            msg : '',
            stete : 1,
            data : data
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
            data : [],
        })
    }
}
exports.getSecondCat = async (req,res) => {
    try {
        const getById = await MainCatModel.find({_id:req.query.id}) 
        
        if (getById){
        return res.json({
            msg : "This your main product ",
            stete : 1,
            data : getById,
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
            stete : 0,
            data : [],    
        })
    }
}
exports.update = async (req,res) => {
    try {
        await MainCatModel.findOneAndUpdate({_id:req.query.id},{
            mainName : req.body.mainName,
            image : req.body.image,
        }).then((result)=>{
        return res.json({
            msg : "your sup product has been updated",
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
        await MainCatModel.findOneAndDelete({_id:req.query.id}).then(()=>{
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