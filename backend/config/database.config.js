const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// Connection URL
const url = "mongodb://localhost:27017/typingprodb";

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
