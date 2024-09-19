require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
passport = require("passport"),
 bodyParser = require("body-parser"),
 LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose")

const app = express();
const port = 3300;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
 
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(MONGO_CONNECTION
   
).then(success =>{
    console.log("connected to mongodb");
}).catch(error => {
    console.log("Error in connection" +error);
})
app.listen(port,() =>{
    console.log("Server running on port" +port);
});

app.use(express.json());
const router= require("./router/route")
app.use("/",router);

app.get("/register", function (req, res) {
    res.render("reg");
});

app.get("/login", function (req, res) {
    res.render("login");
});
 


