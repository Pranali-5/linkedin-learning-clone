require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
// const ejs = require("ejs");

const port = process.env.PORT || 3000;
const connect = require("./db/conn.js");
const checkoutController = require("./controllers/checkout.controller");
const joinNow = require("./controllers/joinNow.controllers");
const loginHandler = require("./controllers/login.controller");
const Register = require("./models/registers.model.js");

app.use("/checkout", checkoutController);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

console.log(__dirname);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get(["/index", "/index.html", "/"], async (req, res) => {
  res.render("HTML/index");
});
app.get("/signUp", async (req, res) => {
  res.render("HTML/signUp");
});

app.get(["/productsmahi1.html", "/productsmahi1"], async (req, res) => {
  res.render("HTML/productsmahi1");
});

//for registration
app.use("/joinNow", joinNow);

var e = "";
//for login check
app.post("/login", loginHandler);

/*app.get("/login", async function (req, res) {
  const users = await Register.find().lean().exec();
  // return res.send(users);
  return;
});*/

app.get("/congrats", async function (req, res) {
  res.render("HTML/congrats");
});

app.get("/contact", async function (req, res) {
  res.render("HTML/contact");
});

app.get(["/allCourses", "/allCourses.html"], async function (req, res) {
  return res.render("HTML/allCourses", {
    firstName: "Hi",
  });
});

//loading a Course content
app.get("/course", async function (req, res) {
  // const users = await courses.find({tag:`${req.query.tag}`,id:`${req.query.id}`}).lean().exec();
  //return res.json(users);
  // res.send(req.query)
  return res.render("HTML/course"); //,{firstName:req.query.tag+' '+req.query.id})
});

//sending courses data
const courses = require("./models/courses.model.js");

app.get("/test", async function (req, res) {
  const users = await courses
    .find({ tag: `${req.query.tag}` })
    .lean()
    .exec();
  return res.json(users);
});

app.listen(port, async () => {
  await connect();
  console.log(`server is running at port no ${port}`);
});
