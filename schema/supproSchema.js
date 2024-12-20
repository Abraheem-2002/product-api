const mongoose = require("mongoose");
const schema = mongoose.Schema;

const supproSchema = new schema ({
    companyname : {
        type : String
    },
    thereid : {
        type : String
    },

})

module.exports = supproSchema;