// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

// EXPRESS REQUIREMENTS

app.use(express.urlencoded({extended:true}))  //For Parsing
app.set("view engine", "ejs") //For setting view engine
app.set("views",path.join(__dirname,"views")) //For conecting views folder
app.use(express.static(path.join(__dirname,"public"))) // For connecting Public Folder
app.use(methodOverride('_method'))

// DATABASE REQUIREMENTS

mongoose.connect('mongodb://127.0.0.1:27017/test');

// Express App

app.get("/",(req,res)=>{
    res.send("Response")
})

app.listen(port,()=>{
    console.log("server is listening...")
})

