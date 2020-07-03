const FLight = require("../models/Flights");
var request = require('request');

exports.apicall = (req,res) =>{
    request.get({url:'https://test-proj-heroku.herokuapp.com/api/plans'},function(error,response,body){
        res.json(body);
    });
};