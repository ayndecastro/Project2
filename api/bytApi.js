// const request = require('request')
const express = require('express');
const request = require('request');
const app = express(); 


app.get("/countries", function(req,res){
  console.log(res)
})
// const promisfy = require('util').promisify

// const pRequest = promisfy(request)
// Request.get('https://www.budgetyourtrip.com/api/v3/countries/', function(err, req, res) {
//    if(err){
//      return console.dir(err)
//    }
//    console.dir(JSON.parse(res))
//   });

