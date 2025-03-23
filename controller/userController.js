const userModel = require('../model/userModel');
const bcrypt = require("bcryptjs");

exports.SingUp = async(req,res) =>{ 
        try {
            const {firstName,lastName,userName,email,password} = req.body;
            if (!firstName || !lastName || !userName || !email || !password){
                return res.status(500).send({
                    msg : "please provide all fields",
                    stete : 0,
                    data : [],
                })
            }
            // To check if this email or the username it's already taken before or no
            const taken = await UserModel.findOne({email : email,
                userName : userName,
            })
            if(taken){
                return res.status(500).send({
                    msg : "This username or Email taken already",
                    stete : 0,
                    data : [],
                })
            }
            // To hash a password:
                var salt = bcrypt.genSaltSync(8);
                const hasPassword = await bcrypt.hash(password, salt);
            await UserModel.create({
                firstName : firstName,
                lastName : lastName,
                userName : userName,
                email : email,
                password : hasPassword,
            }).then((data)=>{
                return res.status(201).send({
                    msg : "your account created successfully",
                    stete : 1,
                    data : data,  
                })
            }).catch((err)=>{
                console.log(err)
                return res.status(500).send({
                    msg : "internal server error",
                    stete : 0,
                    data : []
                })
            })        
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                msg : "internal server error",
                stete : 0,
                data : []
            })
        }
    
    }
// login ==>>>>
exports.login = async(req,res) => {
    const {email,password} = req.body;
    const data = await UserModel.findOne({email:email})
        //To check a password:
        const isMatch = await bcrypt.compare(password , data.password);
        if(!isMatch){
            return res.status(404).send({
                msg : "The password is wrong",
                stete : 0,
                data : [],
            })
        }
    if(!email || !password){
        return res.status(404).send({
            msg : "The Email or Password wrong",
            stete : 0,
            data : []
        })
    }else{
        let userinfo = {
            _id : data._id,
            userName : data.userName,
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
        }
        return res.status(201).send({
            msg : "Login successfully",
            stete : 1,
            data : userinfo,
        })
    }
}