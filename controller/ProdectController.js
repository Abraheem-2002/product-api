const prodectModel = require("../model/prodectModel");

exports.createprodect = async (req,res) => {
    try {
        const prodectname = req.body.prodectname;
        const descripition = req.body.descripition;
        const size = req.body.size;
        const discount = req.body.discount;
        const quantity = req.body.quantity;
        const image = req.body.image;
        const price = req.body.price;
        const thereid = req.body.thereid;
    
        if(!prodectname || !descripition || !quantity || !image || !price || !thereid ){
            return res.json({
                msg : "plase fell the field",
                stete : 0,
                data : [],
            })
        }
    
        await prodectModel.create({
            prodectname : prodectname,
            descripition : descripition,
            image : image,
            quantity : quantity,
            price : price,
            thereid : thereid,
        }).then((database)=>{
          return res.json({
            msg : "Your prodects has been created seccsfuly",
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
        const result = await prodectModel.find({})
    if(result){
        return res.json({
            msg : "That is all Your prodects",
            stete : 1,
            data : result,
          })   
    }else{
     return res.json({
        msg : "There is no prodect",
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


exports.getallbyid = async (req,res) => {
    try {
        id : req.params.id
    
        await prodectModel.find({thereid : id}).then((result) =>{
            return res.json({
                msg : "That is all Your prodects",
                stete : 1,
                data : result,  
            }).catch(()=>{
                return res.json({
                    msg : "internal server error",
                    stete : 0,
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

exports.update = async (req,res) => {
    try {
        await prodectModel.findOneAndUpdate({_id:req.params.id},{
            prodectname : req.body.prodectname,
            descripition : req.body.descripition,
            // quantity : quantity-1,
            quantity :req.body.quantity,
            price : req.body.price,
            thereid : req.body.thereid,
        }).then((result)=>{
        return res.json({
            msg : "your prodect has been updated",
            stete:1,
            data : result
        }).catch(()=>{
            res.json({
                msg : "somethig wrong",
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
    await prodectModel.findOneAndDelete({_id:req.params.id}).then(()=>{
        return res.json({
            msg : "your prodect has been deleted secssefuly",
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