const mongoose = require("mongoose");
const paySchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  card_number: { type: Number, required: true },
  exp: { type: String, required: true },
  sec_code: { type: Number, required: true },
  country: { type: String, required: true },
  postal: { type: Number, required: true },
  gst: { type: String, required: true },
});

const Payment = mongoose.model("paydb", paySchema);

module.exports = Payment;