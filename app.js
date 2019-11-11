require("dotenv").config();
var express 	= require('express'),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	Campground  = require("./models/campground"),
	seedDB 		= require("./seeds"),
	Comment 	= require("./models/comment"),
	passport	= require("passport"),
	localStrategy = require("passport-local"),
	User		= require("./models/user"),
	methodOverride = require("method-override"),
	flash = require("connect-flash")

var commentRoutes    = require("./routes/comments"),
	reviewRoutes     = require("./routes/reviews"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes      = require("./routes/index")

// require('dotenv').load();

var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds")
	indexRoutes		= require("./routes/index")

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost/yelp_camp",{ useNewUrlParser: true, useUnifiedTopology: true  });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());




// seedDB(); //Seed the database
app.locals.moment = require('moment');
//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Stella is the most amazing frenchie in the world",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
})

//Requiring routes
app.use(indexRoutes)
app.use("/campgrounds/:id/comments", commentRoutes)

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);

app.use("/campgrounds/:id/reviews", reviewRoutes);


//Tell port to listen at port 3000:
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("SERVER IS LISTENING AT PORT 3000");
});