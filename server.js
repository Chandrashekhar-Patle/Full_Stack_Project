
// import express from "express";
// import path from "path";
// import mongoose  from "mongoose";
// import bodyParser from "body-parser";

require('dotenv').config()

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, "src")))
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect(process.env.MONGOOSE)
.then(()=>{
    console.log("Your Database Connected Successfully");
})
.catch((err)=>{
    console.log("Error", err);
})


// --- Creating a Schema for the form --------
const schema = mongoose.Schema

const dataSchema = new schema({
    fName : String,
    lName : String,
    phoneNo : Number,
    email : String,
    password : String,
    confirmPassword : String,
})

const dataModel = mongoose.model("dataModel", dataSchema)

app.post('/register',  (req,res)=>{
    const {fName,lName,email,phoneNo, password,confirmPassword} = req.body

    const myData = new dataModel({
        fName,
        lName,
        email,
        phoneNo,
        password,
        confirmPassword,
    })
    myData.save()
    res.redirect('/')
})


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "Views", "index.html"));
})



app.listen(process.env.PORT, ()=>{
    console.log(`server is running http://localhost:${process.env.PORT}`);
})

