import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGODB_URI;

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to DB successfully"))
  .catch((error) => console.error(" DB connection error:", error));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT}`);
});
