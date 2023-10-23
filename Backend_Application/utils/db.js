var mongoose = require("mongoose");

exports.connect =async()=>{
    //console.log("connected to DB Backend");
   var response = await mongoose.connect(process.env.MongoDB_Url);
   if(response instanceof Error){
    console.log(response);
   }
   else{
    console.log("connected to DB Backend");
   }
    
}