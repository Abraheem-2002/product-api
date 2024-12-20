const MainproModel = require("../model/mainproModel");



exports.crearetmainfield = async (req,res) => {
    try {
        const mainname = req.body.mainname;
        const image = req.body.image;

        if (!mainname ){
            return res.json({
                msg : "plase enter the name !",
                stete : 0,
                data : [],
            })
        }

        await MainproModel.create({
            mainname : mainname,
            image : image,
        }).then((ourdata)=> {
         return res.json({
            msg : "Thank you to create your brand",
            stete : 1,
            data : ourdata
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

exports.getsecondfield = async (req,res) => {
    try {
      const getbyid = await MainproModel.find({_id:req.params.id}) 
      
      if (getbyid){
        return res.json({
            msg : "This your main prodect ",
            stete : 1,
            data : getbyid,
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
            stete : 0,
            data : [],    
        })
    }
}


exports.update = async (req,res) => {
    try {
        await MainproModel.findOneAndUpdate({_id:req.params.id},{
            mainname : req.body.mainname,
            image : req.body.image,
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
       await MainproModel.findOneAndDelete({_id:req.params.id}).then(()=>{
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