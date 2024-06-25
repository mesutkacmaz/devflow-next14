import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strict", true);

  if (!process.env.MONGODB_URI) {
    return console.warn("Missing MongoDB URI");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "devflow" });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};
