const { response } = require("express");
const passport = require("passport");

function chkLogin(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

function chkGuest(req,res,next){
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

function chkAdmin(req,res,next){
  if (req.type==="admin"){
     next();

  }
  else{
    res.redirect("/");
  }
}


module.exports = {
  chkLogin,
  chkGuest,
  chkAdmin
};
