const habitsCollection = require("../models/habits");  //importing the mongodb habits model

const controller = function (req, res) {  //controller function to display habits and their statuses
      
   let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   let date=new Date();

   habitsCollection.find({},function(err,habitRow){
      //    rendering the home view
   res.render("home",{
         title:"Habit-tracker", 
         habits:habitRow,
         daysOfWeek:daysOfWeek,
         monthNames:monthNames,
         date:date,
         });});
}
// exporting the controller method
module.exports=controller;
