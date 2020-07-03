var mongoose = require('mongoose');


const Flights = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    date : {type : String, required : true},
    arrivalTime : String,
    journeyType : Number,
    class : String,
    adt : 0,
    chd : 0,
    inf : 0,
    route : String,
    multiCity : String,
    src:String,
    dest:String,
    flightCabinClass : Number,
    directFlight : String,
    oneStopFlight : String,
    endUserIp : String,
    sources : Number
});

const Flightsmodel = mongoose.model("Flightsmodel",Flights);
module.exports = Flightsmodel