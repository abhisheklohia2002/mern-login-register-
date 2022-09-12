const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required : true
    },
    lastname : {
        type : String,
        required: true
    },
    email: {
        type : String,
        required : true
    }
    ,
    phone : {
        type: Number,
        required: true,
        minlen: 10,
        unique : true
    }
})



// now we need to create a Collection
const details = new mongoose.model("register",employeeSchema);
module.exports = details;
