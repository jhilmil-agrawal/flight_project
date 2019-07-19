var fs=require("fs");
var xlsxj = require("xlsx-to-json");
var express=require("express")
var app=express();
var body=require("body-parser");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Allow-Methods","*");
    next();
})
app.get("/generate",function(req,res){
    xlsxj({
        input: "d:/flighdata_B.xlsx", 
        output: "d:/output.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          console.log(result);
        }
      });
      res.send("generated");
    
})

app.get("/display",function(req,res){
    xlsxj({
        input: "d:/flighdata_B.xlsx", 
        output: "d:/output.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          console.log(result);
        }
      });

// reading the json file
fs.readFile('d:/output.json', (err, data) => {
    if (err) throw err;
    let flightdata = JSON.parse(data);
   res.send(flightdata)
    console.log(flightdata);
});
});
app.listen(9090);