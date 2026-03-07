import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "jtnews",
      // set database Name
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ DB connection error", error);
    throw error;
  }
};

export default connectToDB;
