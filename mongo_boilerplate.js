// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

// EXPRESS REQUIREMENTS

app.use(express.urlencoded({extended:true}))  //For Parsing
app.set("view engine", "ejs") //For setting view engine
app.set("views",path.join(__dirname,"views")) //For conecting views folder
app.use(express.static(path.join(__dirname,"public"))) // For connecting Public Folder
app.use(methodOverride('_method'))

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

app.listen(port,()=>{
    console.log("server is listening...")
})

