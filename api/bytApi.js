"use strict";
var request = require("request");
var Sequelize = require("sequelize");

module.exports = function(options){
options = { method: 'GET',
url: 'https://www.budgetyourtrip.com/api/v3/countries/',
headers: 
 { 'Postman-Token': '8066e5f0-9632-4642-967b-2fb2bd52c32f',
   'cache-control': 'no-cache',
   'x-api-key': 'vincentayndecastro' } };

request(options, function (error, response, body) {

if (error) throw new Error(error);

console.log("\n===============================================\n"+body+"\n===============================================");
});

}
