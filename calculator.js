const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
    var num1 = Number(req.body.num1), num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The calculated Result is : " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalci.html");
});
app.post("/bmicalculator", function(req, res){
    var num1 = Number(req.body.weight), num2 = Number(req.body.height);
    var result = parseFloat(num1)/parseFloat(num2*num2);
    res.send("BMI calculated Result is : " + result);
});

app.listen(3000);
