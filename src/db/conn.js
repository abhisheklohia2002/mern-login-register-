


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dataEntry",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Successfull Database Connection")
}).catch((err)=>{
    console.log("error inn database")
})



