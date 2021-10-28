const mongoose = require("mongoose");
// require("dotenv").config();
// const uri = process.env.MONGODB_URI;
//mongodb+srv://ankit_3443:ankit_3443%40@cluster0.j4oiz.mongodb.net/lyndaRegistration?retryWrites=true&w=majority
//.connect("mongodb://127.0.0.1:27017/lyndaRegistration", {
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ankit_3443:ankit_3443%40@cluster0.j4oiz.mongodb.net/lyndaRegistration?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};
module.exports = connect;
