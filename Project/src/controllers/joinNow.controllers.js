// const router = async (req, res) => {
//   res.render("HTML/joinNow");
// };

// module.exports = router;

const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");

const Register = require("../models/registers.model.js");

router.get("", async (req, res) => {
  return res.render("HTML/joinNow");
});

router.post(
  "",
  body("email").isEmail().withMessage("Enter valid email address"),

  async (req, res) => {
    try {
      const user = new Register({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      await user.save();

      return res.status(200).render("HTML/signUp", {});
    } catch (err) {
      return res.status(400).render("HTML/joinNow", {
        alert: "user is already registerd",
      });
    }
  }
);

module.exports = router;
