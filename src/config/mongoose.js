import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const Url = process.env.MONGODB || "mongodb://0.0.0.0:27017/issueTrackerDB";

export const connectToDb = async () => {
  try {
    await mongoose.connect(Url);
    console.log("MongoDB connected successfully using mongoose");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
