// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override'); // FOr using PUt,DELETE Request
const mongoose = require('mongoose'); //For connecting MONGODB
const ejsMate = require('ejs-mate'); //For Better Templating EJS-MATE
const Chat = require("./models/chat.js") // For mongoose models
const ExpressError = require("./ExpressError.js") // for ExpressError which is custom Error > Class

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

let chat1 = new Chat({
    from:"Aazmeer",
    to: "ruhab",
    message:"Send me the notes",
    created_at: new Date()
})

chat1.save().then((res)=>{
    console.log(res)
})
// Express App

app.get("/",(req,res)=>{
    res.send("Response")
})

// Error Handling middleware
app.use((err,req,res,next)=>{
    let{status=500,message} = err;
    res.status(status).send(message)
    next()
})

app.listen(port,()=>{
    console.log("server is listening...")
})

