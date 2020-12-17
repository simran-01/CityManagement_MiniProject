const mongoose = require("mongoose");

async function dbconnect() {
  await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  console.log("db connected");
}

dbconnect();

module.exports = mongoose;
