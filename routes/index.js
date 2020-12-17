const router = require("express").Router();
const Complaint = require('../Models/Complaint');
const check = require("../middleware/middleware");

router.get("/", async function (req, res) {
  let message = false;
  if(req.query.status){
    message = true;
  }
  if(req.user){
    if(req.user.type === 'admin'){
       let complaints = await Complaint.find({}).populate('complaintBy').exec();
       
       function formatDate(date){
        let d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
       }
       
       res.render('complaints/recieve', {
         complaints,
         formatDate
       });
      }else{
        res.render('home', {
          message
        });
      }
    }else{
    res.render("home",{
      message
    });
  }
  
});

router.get("/login", check.chkGuest ,function (req, res) {
  res.render("signup");
});

router.get("/facilitiesandservices" ,function (req, res) {
  res.render("nav2");
});

router.get("/services" ,function (req, res) {
  res.render("services_facilities/services/services");
});


router.get('/logout',(req, res)=>{
  req.logOut();
  req.logout();
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;
