const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.CLUSTER;
const connect = () => {
  return (
    mongoose
      //.connect("mongodb://127.0.0.1:27017/lyndaRegistration", {
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log(`connection successful`);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
module.exports = connect;
