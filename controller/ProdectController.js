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
        const supproid = req.body.supproid;
        const year = req.body.year;
        const color = req.body.color;
        const miles =req.body.miles;
            
        if(!prodectname || !descripition || !quantity || !image || !price || !supproid || !year || !color || !miles){
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
            supproid : supproid,
            year : year,
            color :color,
            miles : miles,
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
       const id = req.params.id
       const returnresult = await prodectModel.find({supproid : id})
       if (returnresult){
        return res.json({
            msg : "That is all Your prodects in your prand",
            stete : 1,
            data : returnresult,
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

exports.getbyyear = async(req,res) => {
    try {
        const id = req.params.id;
        const {year,supproid} = req.body;
        const result = await prodectModel.find({
            supproid : id,
            year : year,
            
        }
        )

        if(result){
            return res.json({
                msg : "Great that's all prodect with this year",
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


exports.getbycolor = async(req,res) => {
    try {
        const id = req.params.id;
        const {color,supproid} = req.body;
        await prodectModel.find({supproid : id,
            color : color,
        }).then((data)=>{
         return res.json({
            msg : "that's all prodect with this color",
            stete : 1,
            data : data
         }).catch((err) => {
            console.log(err);
            res.json({
                msg : "somethig wrong",
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

exports.getbymiles = async(req,res) => {
    try {
        const id = req.params.id;
        const {miles,supproid} = req.body;
    
        await prodectModel.find({supproid : id,
            miles : miles,
        }).then((data)=>{
            return res.json({
                msg : "that's all prodect with this miles",
                stete : 1,
                data : data,
            }).catch((err) =>{
                console.log(err);
                return res.json({
                    msg : "somethig wrong",
                    stete : 0,
                    data :[],
                })
            })
    
        })    
    } catch (error) {
        console.log(error);
        return res.json({
            msg : "inetrnal server error",
            stete : 0,
            data : [],
        })
    }
    
}

exports.getbyprice = async(req,res) => {
    try {
        const id = req.params.id;
        const {supproid,price} =req.body;
        await prodectModel.find({supproid : id,
            price : price,
        }).then((data) =>{
            return res.json({
                msg : "that's all prodect with this price",
                stete : 1,
                data : data,
            })
        }).catch((err) =>{
            console.log(err);
            return res.json({
                msg : "somethig wrong",
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
        await prodectModel.findOneAndUpdate({_id:req.params.id},{
            $or :{
                prodectname : req.body.prodectname,
                descripition : req.body.descripition,
                quantity :req.body.quantity,
                price : req.body.price,
                thereid : req.body.thereid,
            }
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