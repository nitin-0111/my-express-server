// jshint esversion :6
const express=require("express");
const app =express();
 app.get("/",function(request,res){
   // console.log(request);
 // response.send("hello baby");

 // res ->response req ->request
 res.send("<h1> hello baby</h1>");

});
app.get("/contact",function(req,res)
{
  res.send("contact me at: nitin singh akdsj");
});

app.get("/about",function(req,res){
  res.send("I am a dev now (dev. mode on)");
});

app.get
app.listen(3000,function(){console.log("server started on port 3000");
});
