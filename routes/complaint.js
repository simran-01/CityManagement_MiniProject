const router = require("express").Router();
const middleware = require("../middleware/middleware");
const Complaint = require("../Models/Complaint");

router.get("/", function (req, res) {
  res.render("complaints/complaint");
});

router.get("/water", function (req, res) {
  res.render("complaints/water");
});

router.get("/electricity", function (req, res) {
  res.render("complaints/electricity");
});

router.get("/others", function (req, res) {
  res.render("complaints/other");
});

router.get("/road", function (req, res) {
  res.render("complaints/road");
});

router.get("/safetyandsecurity", function (req, res) {
  res.render("complaints/safety");
});

router.get("/transportation", function (req, res) {
  res.render("complaints/transportation");
});

router.get("/waste_management", function (req, res) {
  res.render("complaints/waste_management");
});

//post
router.post("/complaintregister", function (req, res) {
  Complaint.create(
    {
      name: req.body.name,
      category: req.body.category,
      address: req.body.address,
      checkbox: req.body.check ? req.body.check.toString() : undefined,
      complaint: req.body.others,
      complaintBy: req.user._id,
    },
    function (err, comp) {
      if (err) {
        console.log(err);
        res.redirect("/complaint");
      }

      res.redirect("/?status=success");
    }
  );
});

module.exports = router;
