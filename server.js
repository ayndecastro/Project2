var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
const path = require("path");
const Sequelize = require('sequelize');

let PORT = process.env.PORT || 5000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app')));


// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');


app.get('/', function (req, res) {
    res.redirect("/signup");
});



//Models
var models = require("./app/models");




//Routes
require('./app/routes/auth.js')(app, passport);
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/apiRoutes.js")



//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine');
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});









