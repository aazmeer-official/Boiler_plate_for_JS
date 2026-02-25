// BASIC REQUIREMENTS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');
const { faker } = require('@faker-js/faker');
const { v4:uuidv4 } = require('uuid');
const ejsMate = require('ejs-mate');
const mysql = require('mysql2'); // Requiring MYSQL2
// EXPRESS REQUIREMENTS

app.use(express.urlencoded({extended:true}))  //For Parsing
app.set("view engine", "ejs") //For setting view engine
app.set("views",path.join(__dirname,"views")) //For conecting views folder
app.use(express.static(path.join(__dirname,"public"))) // For connecting Public Folder
app.use(methodOverride('_method'))

// DATABASE REQUIREMENTS

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'routing',
  password: 'heroA1234#1234@1234'
});

app.get("/",(req,res)=>{
    res.send("Response")
})

app.listen(port,()=>{
    console.log("server is listening...")
})

