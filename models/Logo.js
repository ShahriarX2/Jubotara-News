import { Schema, model } from "mongoose";

const LogoSchema = new Schema(
  {
    logoUrl: { type: String, default: null },
    publicId: { type: String, default: null },
  },
  { timestamps: true },
);

export default model("Logo", LogoSchema);
