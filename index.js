const express = require('express')
const router = require("./router/router");
const cors = require("cors");
const mongoose =require("mongoose");
const dotenv = require("dotenv")
const app = express()
const port = 1000

dotenv.config();

mongoose.connect(process.env.CONNACTION_STRING,{
    useNewUrlparser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Seccsesful connected");
}).catch((err) =>{
    console.log(err);
})

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))