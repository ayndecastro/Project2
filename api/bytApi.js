
"use strict";
var request = require("request");
var Sequelize = require("sequelize");
const promisify = require('util').promisify

const fetch = promisify(request);



module.exports = function (options) {
  let config = {
    method: "GET",
    url: `https://www.budgetyourtrip.com/api/v3/countries/${options.endpoint}`,
    headers: {
      "Postman-Token": "8066e5f0-9632-4642-967b-2fb2bd52c32f",
      "cache-control": "no-cache",
      "x-api-key": "vincentayndecastro"
    }
  };

  return fetch(config)
}

// const apiCall = require('this file path')({ endpoint: 'country' })
// apiCall.then(data => {
  // do something with data
// })
