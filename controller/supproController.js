const supproModel = require("../model/supproModel");


exports.createsecondfield = async (req,res) => {
    try {
       const companyname = req.body.companyname;
       const thereid = req.body.thereid;
       if (!companyname || !thereid){
        return res.json({
            msg : "plase fell the field !",
            stete : 0,
            data : [],
        })
       }
        await supproModel.create({
           companyname : companyname,
           thereid : thereid,
        }).then((ourdata)=>{
            return res.json({
                msg : "Your sup prodect has been created seccsfuly",
                stete : 1,
                data : ourdata
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
        // _id : req.params._id
     const result = await supproModel.find({})
     
     if(result){
        return res.json({
            msg : "this your sup prodect",
            stete : 1,
            data : result,
        })
     }else{
        return res.json({
            msg : "we cant find any main prodect with this id",
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


exports.getallbyid = async (req,res) => {
 try {
    // thereid : req.params.thereid
    id : req.params.id
    const ourresult = await supproModel.find({thereid : id})
    if (ourresult){
        return res.json({
            msg : "this your sup prodect with id",
            stete : 1,
            data : ourresult,
        })
    }else {
        return res.json({
            msg : "we cant find any main prodect with this id",
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
        await supproModel.findOneAndUpdate({_id:req.params.id},{
            companyname :req.body.companyname,
        }).then((result)=>{
        return res.json({
            msg : "your sup prodect has been updated",
            stete:1,
            data : result
        }).catch(()=>{
            res.json({
                msg : "some thig wrong",
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
       await supproModel.findOneAndDelete({_id:req.params.id}).then(()=>{
           return res.json({
               msg : "your sup prodect has been deleted secssefuly",
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