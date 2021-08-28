const express = require("express");
const path = require("path");
const app = express();
//const ejs = require("ejs");
const connect = require("./db/conn.js");
const checkoutController = require("./controllers/checkout.controller");
const Register = require("./models/registers.model.js");

const port = process.env.PORT || 3000;
app.use("/checkout", checkoutController);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

console.log(__dirname);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get(["/index", "/index.html"], async (req, res) => {
  res.render("HTML/index");
});
app.get("/signUp", async (req, res) => {
  res.render("HTML/signUp");
});

app.get(["/productsmahi1.html","/productsmahi1"], async (req, res) => {
  res.render("HTML/productsmahi1");
});

//for registration

app.get("/joinNow", async (req, res) => {
  res.render("HTML/joinNow");
});

app.post("/joinNow", (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword && (cpassword != "" || password != "")) {
      const users = new Register({
        firstName: req.body.firstName,
        email: req.body.email,
        password: password,
        cpassword: cpassword,
      });
      console.log(users);
      const reg_users = users.save();
      res.render("HTML/signUp");
    } else {

    }
    // res.render();
  } catch (err) {
    res.status(400).send(err);
  }
});
var e = "";
//for login check
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    if (useremail.password === password) {
      e = useremail.firstName;
      return res.status(201).render("HTML/checkout", {
        firstName: useremail.firstName,
      });
    } else {
    }
  } catch (err) {

  }
});

app.get("/login", async function (req, res) {
  const users = await Register.find().lean().exec();
  // return res.send(users);
  return;
});

app.get("/congrats", async function (req, res) {
  res.render("HTML/congrats");
});

app.get("/contact", async function (req, res) {
  res.render("HTML/contact");
});

app.get(["/allCourses", "/allCourses.html"], async function (req, res) {
  return res.render("HTML/allCourses", {
    firstName: e,
  });
});

//loading a Course content
app.get("/course", async function (req, res) {
  // const users = await courses.find({tag:`${req.query.tag}`,id:`${req.query.id}`}).lean().exec();
  //return res.json(users);
  // res.send(req.query)
  return res.render("HTML/course")
});

//sending courses data
const courses = require("./models/courses.model.js");

app.get("/test", async function (req, res) {

  const users = await test
    .find({ tag: `${req.query.tag}` })
    .lean()
    .exec();
  return res.json(users);
  const users = await courses.find({tag:`${req.query.tag}`}).lean().exec();
  return res.json(users)

});

function check(useremail) {}

app.listen(port, async () => {
  await connect();
  console.log(`server is running at port no ${port}`);
});
