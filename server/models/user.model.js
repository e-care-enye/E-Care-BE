const mongoose = require("mongoose");
// const crypto = require('crypto');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    martital_status: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
    },
    level_of_education: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    next_of_kin_name: {
      type: String,
    },
    address_next_of_kin_name: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: String,
    //   enum: ["Admin", "User"],
    //   required: true,
    // },
    delivery_address: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
