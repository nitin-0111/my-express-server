 const express =require("express");

const bodyParser=require("body-parser");


const app =express();


app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//   res.send("hello world ");
// });



app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
})


// 1.
 // app.post("/",function(req,res){
 //   res.send("Thanks for posting that");
 // });

 app.post("/",function(req,res){

   console.log(req.body);
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var result=num1+num2;
   res.send(" rest"+result);

   res.send("Thanks for posting that");
 });



 //  BMI cal..



 app.get("/bmicalculator",function(req,res){
   res.sendFile(__dirname+"/bmicalculator.html");
 })
 app.post("/bmicalculator",function(req,res){
   var w=Number(req.body.w);
   var h=Number((req.body.h));
   var ans=w*h;
   res.send("BMI"+ans);
 })
 //

app.listen(3000,function(){
  console.log("severs is running on port 3000");
});
