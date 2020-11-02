const express=require("express");

const router=require("./routes");

const mongoose=require("./config/mongoose");

const ejs=require("ejs");

const app=express();




const port=process.env.PORT|| 8000;




// setting view
app.set('view engine','ejs');
app.set('views','./views');


// middlewares
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/",router);


//firing up the server
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server Running On Port 8000");
})



