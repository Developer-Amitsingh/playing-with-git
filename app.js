var express = require("express");
var app = express();



app.get("/",function(req,res){
	res.render("home.ejs");
});

app.get("/about",function(req,res){
	res.render("about.ejs");
});

app.get("/contact",function(req,res){
	res.render("contact.ejs");
});

app.get("/feedback",function(req,res){
	res.render("feedback.ejs");
});


app.listen(process.env.PORT,process.env.IP);