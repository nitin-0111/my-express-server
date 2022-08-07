const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

})
app.post("/",function(req,res){
  // console.log(req.body.cityName);
   const query=req.body.cityName;
   const apikey="a973afda3b41d5f5611af536035829a0";
   const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url,function(respone)
  {
    console.log(respone.statusCode);

    respone.on("data",function(data){
      // console.log(data);    1

      const weatherData=JSON.parse(data);
      // JSON.stringify(object);  2

      const temp=weatherData.main.temp;
      console.log(temp);

      const description=weatherData.weather[0].description;
      console.log(description);
      const icon=weatherData.weather[0].icon;
      const imageUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";




      res.write("<p> the weather is currently "+description+"<p>");
      res.write("<h1>The temp. in "+query+" is "+temp+"degrees Celcius. </h1>");
      res.write("<img src="+ imageUrl+"> ")
       res.send();


    });
  });


});


/* starting part of APi modul*/
// app.get("/",function(req,res){
//   const url="https://api.openweathermap.org/data/2.5/weather?q=Jaipur,Rajasthan&appid=a973afda3b41d5f5611af536035829a0&units=metric"
//   https.get(url,function(respone)
// {
//   console.log(respone.statusCode);
//
//   respone.on("data",function(data){
//     // console.log(data);    1
//
//     const weatherData=JSON.parse(data);
//     // JSON.stringify(object);  2
//
//     const temp=weatherData.main.temp;
//     console.log(temp);
//
//     const description=weatherData.weather[0].description;
//     console.log(description);
//     const icon=weatherData.weather[0].icon;
//     const imageUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
//
//
//
//
//     res.write("<p> the weather is currently "+description+"<p>");
//     res.write("<h1>The temp. in Jaipur is "+temp+"degrees Celcius. </h1>");
//     res.write("<img src="+ imageUrl+"> ")
//      res.send();
//
//
//   });
// })
// })
app.listen(3000,function(){
  console.log("sever is running on port 3000");
})
