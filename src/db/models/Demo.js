const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  companyname: {
    type: String,
  },
  place: {
    type: String,
  },
});

const Demo = new mongoose.model("Demo", demoSchema);

module.exports = Demo;
