var db = require("../models");
// let Options = require("../api/bytApi");
const request = require('request')



module.exports = function(app) {

 

  // Get detailed cost of specific stuff example - taxi cost
  app.get("/costs/countryhighlights/:country_code", function(req,res){
    console.log("/costs/countryhighlights/" +req.params.country_code)
    request.get({
      url: "https://www.budgetyourtrip.com/api/v3/costs/countryhighlights/" + req.params.country_code,
      headers: {"x-api-key": "vincentayndecastro"}
    }, function(error,response,body){

      res.json(JSON.parse(body))
    })
  })

  //gives a suggested budget for specific category. reference /categories
  app.get("/costs/countryinfo/:country_code", function(req,res){
    console.log("/costs/countryinfo/country_code/" +req.params.country_code)
    request.get({
      url: "https://www.budgetyourtrip.com/api/v3/costs/countryinfo/" + req.params.country_code,
      headers: {"x-api-key": "vincentayndecastro"}
    }, function(error,response,body){

      res.json(JSON.parse(body))
    })
  })

  
  
  //get travel cost categories
  app.get("/categories", function(req,res){
    console.log("/categories")
    request.get({
      url: "https://www.budgetyourtrip.com/api/v3/categories",
      headers: {"x-api-key": "vincentayndecastro"}
    }, function(error,response,body){

      res.json(JSON.parse(body))
    })
  })

  
  
  
  //get travel cost categories
  app.get("/search/country/:name", function(req,res){
    console.log("/search/country/" + req.params.name)
    request.get({
      url: "https://www.budgetyourtrip.com/api/v3/search/country/" + req.params.name,
      headers: {"x-api-key": "vincentayndecastro"}
    }, function(error,response,body){

      res.json(JSON.parse(body))
    })
  })

  // app.get("/:country_code/USD/")
//   unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2018-12-01/2018-12-02")
// .header("X-Mashape-Key", "9hzDJAjyrzmshqEtZ8uvXG7VafZ7p1v4nohjsnZpSWKbDjDT9G")
// .header("X-Mashape-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


  
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