const mongoose = require("mongoose");
const schema = mongoose.Schema;

const supproSchema = new schema ({
    companyname : {
        type : String
    },
    mainproid : {
        type : String
    },

})

module.exports = supproSchema;