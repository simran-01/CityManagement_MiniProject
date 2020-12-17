const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
  checkbox: {
    type: String,
    default: "Not Applicable",
  },
  complaint: String,
  complaintBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Complaint", complaintSchema);
