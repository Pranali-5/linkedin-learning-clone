const Register = require("../models/registers.model.js");

const login = async (req, res) => {
  // var e;
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    if (useremail.password === password) {
      e = useremail.firstName;
      return res.status(201).render("HTML/checkout", {
        firstName: useremail.firstName,
      });
    }
  } catch (err) {}
};

module.exports = login;
