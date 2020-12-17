const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("services_facilities/facilities/facilities");
});

router.get("/schools", function (req, res) {
  res.render("services_facilities/facilities/school");
});

router.get("/hospitals", function (req, res) {
  res.render("services_facilities/facilities/hospital");
});

router.get("/events", function (req, res) {
  res.render("services_facilities/facilities/event");
});

router.get("/gyms", function (req, res) {
  res.render("services_facilities/facilities/gym");
});

router.get("/colleges", function (req, res) {
  res.render("services_facilities/facilities/college");
});

router.get("/hotels", function (req, res) {
  res.render("services_facilities/facilities/hotel");
});

router.get("/libraries", function (req, res) {
  res.render("services_facilities/facilities/library");
});

router.get("/malls", function (req, res) {
  res.render("services_facilities/facilities/mall");
});

router.get("/playgrounds", function (req, res) {
  res.render("services_facilities/facilities/playground");
});
router.get("/events", function (req, res) {
  res.render("services_facilities/facilities/event");
});

router.get("/restaurants", function (req, res) {
  res.render("services_facilities/facilities/restaurant");
});

router.get("/shops", function (req, res) {
  res.render("services_facilities/facilities/Shop");
});
module.exports = router;
