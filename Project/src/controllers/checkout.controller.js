const express = require("express");

const router = express.Router();
const Payment = require("../models/payment.model");

router.get("", async (req, res) => {
  return res.render("lyndapay/payment.ejs");
});
router.post("", async (req, res) => {



  let c_num = req.body.card_number + "";
  let postal = req.body.postal + "";
  if (c_num.length == 16 && postal.length == 6) {
    const payment = new Payment({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      card_number: req.body.card_number,
      exp: req.body.exp,
      sec_code: req.body.sec_code,
      country: req.body.country,
      postal: req.body.postal,
      gst: req.body.gst,
    });
    const data = await payment.save();
    console.log(data);
    return;
  } else {
    await showAlert();
    return;
  }
});


module.exports = router;
