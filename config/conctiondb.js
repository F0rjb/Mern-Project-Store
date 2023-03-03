const mongoose = require("mongoose");
const conectiondb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.mongourl);
    console.log("data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = conectiondb;
