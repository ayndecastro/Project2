let db = require('../models')

module.exports = function (app) {
    app.post("/api/bank/posts", function(req, res) {
        db.Bank.create(req.body).then(function(dbPost) {
          res.json(dbPost);
        });
      });
}
