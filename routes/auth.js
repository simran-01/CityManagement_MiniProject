const router = require("express").Router();
const { request } = require("express");
const passport = require("passport");
const User = require("../Models/User");

router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact,
    birthDate: req.body.dob,
    bloodGroup: req.body.bloodgroup,
    gender: req.body.gender,
    type: req.body.type,
  });

  User.register(newUser, req.body.password, function (err, use) {
    if (err) {
      res.redirect("/login");
      return;
    }
    res.redirect("/");
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/",
  }),
  (req, res) => {}
);

module.exports = router;
