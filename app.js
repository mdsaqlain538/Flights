//author :: Saqlain Patel

//imports
var mongoose = require('mongoose');
var express = require('express'); 
const Flightmodel = require("./models/Flights");
var bodyParser = require('body-parser');

//authentication router
const Flight = require("./routes/Flights");
var app = express();
app.use(bodyParser.json());
app.use("/api",Flight);

//running on the port
app.listen(1234,()=>{
    console.log("server connected");
})

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://navneeth2000:Navneeth2000@cluster0-tlpr0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true ,useCreateIndex: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function(){
    console.log("successfullyconnected");
});

//empty call for checking
app.get("/",(req,res)=>{
    res.send("working");
})

