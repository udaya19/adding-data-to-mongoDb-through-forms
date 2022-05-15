const express = require('express')
const app = express(); 
const hbs = require("hbs");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const user = require('./routes/user')
app.use(bodyParser.urlencoded({extended:true}))
try{
    mongoose.connect('mongodb://localhost/form_data')
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch(()=>{
        console.log("Failed");
    })
}
catch(ex){
    console.log(ex);
}
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('index');
})
app.use(express.json());
app.use('/',user);
app.listen("3000",()=>{
    console.log("Server running on 3000");
})