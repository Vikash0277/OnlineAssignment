const express = require("express");
const { connectDB } = require('./db');
const Offer = require('./models/offer'); // no need for `{ Offer }` if you're doing `module.exports = mongoose.model(...)`
const cors = require("cors");

const PORT = 8000;

const app = express();


connectDB();


app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
  res.json({ message: "Server is running" });
});

app.get('/offer', async (req, res) => {
  try {
    const data = await Offer.find(); 
    res.json(data); 
  } catch (error) {
    console.error("Error during offer data fetching:", error.message);
    res.status(500).json({ error: "Failed to fetch offer data" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
