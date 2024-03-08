const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log(`successfully connected to Mongodb`.bgMagenta.white);
  } catch (error) {
    console.log(`Error while connecting to Mongodb`.bgRed.white, error);
  }
};

module.exports = connectDB;