// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override'); // FOr using PUt,DELETE Request
const mongoose = require('mongoose'); //For connecting MONGODB
const ejsMate = require('ejs-mate'); //For Better Templating EJS-MATE
const Chat = require("./models/chat.js") // For mongoose models
const wrapAsync = require("./utils/wrapAsync.js") // In replacement of Try,Catch
const ExpressError = require("./utils/ExpressError.js") // for ExpressError which is custom Error > Class
const Joi = require('joi'); //Schema Validation

// EXPRESS REQUIREMENTS

app.use(express.urlencoded({extended:true}))  //For Parsing
app.set("view engine", "ejs") //For setting view engine
app.set("views",path.join(__dirname,"views")) //For conecting views folder
app.use(express.static(path.join(__dirname,"public"))) // For connecting Public Folder
app.use(methodOverride('_method'))

// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);

// asyncWrap Function
function asyncWrap(fn){
    return function(req,res,next){
         fn(req,res,next).catch((err)=> next(err));
    }
}


// DATABASE REQUIREMENTS

main()
.then(()=>{console.log("connection Successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Express App

app.get("/",(req,res)=>{
    res.send("Response")
})

// 404 Page Error Throw 
// If the user is sending the request on any page which doesnot exist so we will use it
// app.all with * will check all above routes first and then will give the response if any of the above response doesnot match 


// We learnt a new thing Express k purany version meen woh "*" ko use kr leta tha ab nhi ab is k lye you have to use /.*/ is sy us ko yeh pta lg jay ga that it is originally Regular Expression he 

// 404 Page Error Throw 
// Use a regex literal (no quotes) to bypass the strict string parser
app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});



// Error Handling middleware
app.use((err,req,res,next)=>{
    let{status=500,message} = err;
    res.status(status).send(message)
    next()
})

app.listen(port,()=>{
    console.log("server is listening...")
})

