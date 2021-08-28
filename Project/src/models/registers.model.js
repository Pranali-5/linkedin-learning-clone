const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
  },
  {
    versionKey: false, //for hiding the version key
  }
);

//we will tell mongoose to create that collection inside mongodb with the given schema and
// also create a model that will allow us to interact with mongodb easily

const Register = mongoose.model("register", userSchema);
module.exports = Register;
