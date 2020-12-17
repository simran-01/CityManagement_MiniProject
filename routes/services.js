const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("services_facilities/services/services");
});

router.get("/ambulance", function (req, res) {
  res.render("services_facilities/services/ambulance");
});

router.get("/atm", function (req, res) {
  res.render("services_facilities/services/atm");
});

router.get("/bus", function (req, res) {
  res.render("services_facilities/services/bus");
});
router.get("/chemist", function (req, res) {
  res.render("services_facilities/services/chemist");
});
router.get("/firebrigade", function (req, res) {
  res.render("services_facilities/services/fire");
});
router.get("/policestation", function (req, res) {
  res.render("services_facilities/services/police1");
});
router.get("/ambulance", function (req, res) {
  res.render("services_facilities/services/ambulance");
});
router.get("/ambulance", function (req, res) {
  res.render("services_facilities/services/ambulance");
});
router.get("/railwaystation", function (req, res) {
  res.render("services_facilities/services/railway");
});
router.get("/taxi", function (req, res) {
  res.render("services_facilities/services/taxi");
});
module.exports = router;
