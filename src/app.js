


const path = require("path")
const express = require("express");
const app = express();
const hbs = require('hbs')
require("./db/conn");
const details = require("./models/registers")
const Port = 8000 || process.env.PORT
const static_path = path.join(__dirname,"../public/css")
const template_path = path.join(__dirname,"./templates/views")
const partials_path = path.join(__dirname,"./templates/partials")

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(static_path));


// console.log(path.join(__dirname,"./templates/views"))


app.set('view engine','hbs')   // line of code tell we are using views in the project


app.set("views",template_path)
hbs.registerPartials(partials_path);




app.get("/",(req,res)=>{

res.render("index");

})

app.get("/register",(req,res)=>{
    res.render("register");

})

app.get("/login",(req,res)=>{
    res.render("login");

})

// register 
app.post("/register",  async (req,res)=>{
   try{
//? console.log(req.body.firstname)
const registerEmployee = new details({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    phone: req.body.phone,
})
    let registered =   await registerEmployee.save();
    res.status(201).render("index")

console.log(registerEmployee);


   }
   catch(err){
    res.status(400).send(err)
    console.log("error");
   }
})




///login validation 
app.post("/login", async (req,res)=>{
 try{
const email = req.body.email;
const phone = req.body.phone;
   const useremail =  await  details.findOne({email:email})
        //   res.send(useremail.email);



          if(useremail.email === email || useremail.phone === phone){
            // console.log(useremail.phone)
            res.status(201).render("index")
            
          }
          
            else {
                res.status(400).send("Invalid Entry")
            }
            

 }
 catch(err){
    res.status(400).send("Invalid Email")
 }
})


app.listen(Port,()=>{
    console.log(`successfull connection ${Port}`)
})