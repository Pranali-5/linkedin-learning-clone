const mongoose = require("mongoose");

//mongodb+srv://Pranali:Malkar@09@cluster0.mxmwo.mongodb.net/lyndaRegistration?retryWrites=true&w=majority

const connect = () => {
  return (
    mongoose
      //.connect("mongodb://127.0.0.1:27017/lyndaRegistration", {
      .connect(
        "mongodb+srv://ankit_3443:ankit_3443%40@cluster0.j4oiz.mongodb.net/lyndaRegistration?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        }
      )
      .then(() => {
        console.log(`connection successful`);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};
module.exports = connect;
