var express = require("express");
var app = express();
var path = require("path");


app.use(express.static(path.join(__dirname, "asserts")));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"index1.html"));
});

app.get('/index1.html',function(req,res){
    res.sendFile(path.join(__dirname,"index1.html"));
});

app.get('/book.html',function(req,res){
    res.sendFile(path.join(__dirname,"book.html"));
});

app.get('/tournament.html',function(req,res){
    res.sendFile(path.join(__dirname,"/tournament.html"));
});

app.get('/tournament-reg.html',function(req,res){
    res.sendFile(path.join(__dirname,"tournament-reg.html"));
});

app.listen(5001);
console.log("Server running at : https://localhost:5001/");