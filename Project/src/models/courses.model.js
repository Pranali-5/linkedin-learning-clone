const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    id: Number,
    src: String,
    name: String,
    views: String,
    tag:String,
  },
  {
    versionKey: false, //for hiding the version key
  }
);

//we will tell mongoose to create that collection inside mongodb with the given schema and
// also create a model that will allow us to interact with mongodb easily

const test = mongoose.model("allcourses", userSchema);
module.exports = test;
