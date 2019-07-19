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
        input: "flighdata_B.xlsx", 
        output: "output.json"
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
    // xlsxj({
    //     input: "flighdata_B.xlsx", 
    //     output: "output.json"
    //   }, function(err, result) {
    //     if(err) {
    //       console.error(err);
    //     }else {
    //       console.log(result);
    //     }
    //   });


fs.readFile('output.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
   res.send(student)
    console.log(student);
});
});


app.get("/generate2",function(req,res){
    xlsxj({
        input: "flighdata_B_segments.xlsx", 
        output: "flighdata_B_segments.json"
      }, function(err, result) {
        if(err) {
          console.error(err);
        }else {
          console.log(result);
        }
      });
      res.send("generated");
    
})

app.get("/display2",function(req,res){
fs.readFile('flighdata_B_segments.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
   res.send(student)
    console.log(student);
});
});



app.listen(9090);
