var db = require("../models");
let Options = require("../api/bytApi");
const request = require('request')



module.exports = function(app) {

 

  // Get all examples
  app.get("/costs/countryhighlights/:country_code", function(req,res){
    console.log("Name: " +req.params.country_code)
    request.get({
      url: "https://www.budgetyourtrip.com/api/v3/costs/countryhighlights/" + req.params.country_code,
      headers: {"x-api-key": "vincentayndecastro"}
    }, function(error,response,body){

      res.json(JSON.parse(body))
    })
  })

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};