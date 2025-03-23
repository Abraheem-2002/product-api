const mongoose = require("mongoose");
const schema = mongoose.Schema;

const supCatSchema = new schema ({
    companyName : {
        type : String,
        required : [true,"This field required"],
    },
    mainCatId : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'MainCategory' ,
        required : [true,"This field required"],
    },

})

module.exports = supCatSchema;