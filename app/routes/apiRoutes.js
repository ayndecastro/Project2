var db = require("../models");
// let Options = require("../api/bytApi");
const request = require('request')
// let schedule = require('node-schedule');



module.exports = function(app) {

    app.get('/api/user', function(req, res) {
      db.user.findAll({
        include: [
          {
          model: db.bank,
        }
      ]
      }).then(users =>{
        const resObj =users.map(user =>{
          return Object.assign({},
            {
              id: user.id,
              email: user.email,
              password: user.password,
              status: user.status,
              bank: user.banks.map(bank => {
                return Object.assign({},
                  {
                    country: bank.country,
                    balance: bank.balance,
                    datestay: bank.datestay,
                    dateleave: bank.dateleave,
                    dailyincrement: bank.dailyincrement,
                    totalcost: bank.totalcost,
                    userID: bank.userId
                  })
              })
            })
        });
        res.json(resObj)
      })
  });
  app.get("/api/bank", function(req,res){
    db.bank.findAll({
      where:{
        userId:req.user.id
      }
    }).then(bank=>res.json(bank))
  })
  
  app.post("/api/bank", function(req,res){
    console.log(req.body);
    db.bank.create({
      userId: req.user.id,
      country: req.body.country,
      balance: req.body.balance,
      datestay: req.body.datestay,
      dateleave: req.body.dateleave,
      dailyincrement: req.body.dailyincrement,
      totalcost: req.body.totalcost
    }).then(bank=>{
      res.json(bank)
    })
  })

  // app.post("/api/bank/:id", function(req, res) {
  //   db.bank.findOne({
  //     where: {
  //       id:req.params.id
  //     }
  //   }).then(this =>
  //     db.bank.update)
  // })

  // app.get("/balance", function(req,res){
  //   db.bank.findAll({
  //     where:{
  //       userId:req.user.id
  //     }
  //   }).then(balance=>{
  //     if(balance){
  //       return
  //     }
  //   })
  // })

  // app.put("/balance", function(req,res){
  //   db.bank.update({
  //     balance: schedule.scheduleJob("**")
  //   })
  // })
 

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





  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};