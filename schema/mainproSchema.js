const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MainproSchema = new schema ({
    mainname : {
        type : String
    },
    image : {
        type :String
    },
})

module.exports = MainproSchema;