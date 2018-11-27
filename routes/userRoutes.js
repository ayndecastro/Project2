const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const { User } = require('../models');

router.post('/register', async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 10);
  
    try {
      let user = await User.create(
        Object.assign(req.body, { password: hash })
      );
  
      let data = await user.authorize();
      return res.json(data);
  
    } catch(err) {
      return res.status(400).send(err);
    }
  
  });
  
  /* Login Route
  ========================================================= */
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).send(
        'Request missing username or password param'
      );
    }
  
    try {
  
     let user = await User.authenticate(username, password)
  
      return res.json(user);
  
    } catch (err) {
      return res.status(400).send('invalid username or password');
    }
  
  });
  
  /* logout Route
  ========================================================= */
  router.delete('/logout', async (req, res) => {
  
    const { user, cookies: { auth_token: authToken } } = req
  
    if (user && authToken) {
      await req.user.logout(authToken);
      return res.status(204).send()
    }
  
  
    return res.status(400).send(
      { errors: [{ message: 'not authenticated' }] }
    );
  });
  
 router.get('/me', (req, res) => {
    if (req.user) {
      return res.send(req.user);
    }
    res.status(404).send(
      { errors: [{ message: 'missing auth token' }] }
    );
  });
  
  router.get("/bag", function(req,res){
    db.Bag.findAll({}).then(function(items){
      res.json(items)
    })
  })
    // Create a new example
    router.post("/bag", function(req, res) {
      db.Bag.create(req.body).then(function(items) {
        res.json(items);
      });
    });
  
  // export the router so we can pass the routes to our server
  module.exports = router;
  
  