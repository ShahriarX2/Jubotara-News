import mongoose, { Schema, model } from "mongoose";

const AdSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export default model("Ads", AdSchema);
