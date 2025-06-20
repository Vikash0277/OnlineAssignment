const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://prasadvikash742:prasadvikash742@cluster0.wc7jxyy.mongodb.net/Interview?retryWrites=true&w=majority'
    );
    console.log(" MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}

module.exports = { connectDB };
