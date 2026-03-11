import mongoose, { Schema, model } from "mongoose";

const LogoSchema = new Schema(
  {
    logoUrl: { type: String, default: null },
    publicId: { type: String, default: null },
  },
  { timestamps: true },
);

export default mongoose.models.Logo || model("Logo", LogoSchema);
