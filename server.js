//importing modules and assigning to variable
const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./config/db");
const passport = require("passport");
const LocalStrat = require("passport-local").Strategy;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const User = require("./Models/User");
const router = require("./routes/auth");
const middleware = require("./middleware/middleware");

//express configurations
app.use(express.static("public")); //all static files in a folder
app.set("views", "views");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.set("view engine", "ejs"); //setting ejs templating system to view engine

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrat(User.authenticate()));

app.use((req,res,next)=>{
  res.locals.user =  req.user || '';
  next();
});

// creating routes for pages

app.use("/", require("./routes/index"));

app.use("/complaint", middleware.chkLogin, require("./routes/complaint"));

app.use("/auth", require("./routes/auth"));

app.use("/facilities", require("./routes/facilities"));

app.use("/services", require("./routes/services"));

app.listen(3000,()=>{
  console.log("server started website live at localhost:3000")
});
