import mongoose, { Schema, model } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export default mongoose.models.Category || model("Category", CategorySchema);
