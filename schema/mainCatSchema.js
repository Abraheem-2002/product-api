const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MainCatSchema = new schema ({
    mainName : {
        type : String,
        required : [true,"This field required"],
    },
    image : {
        type :String
    },
})

module.exports = MainCatSchema;