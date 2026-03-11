import mongoose, { Schema, model } from "mongoose";

const NavbarSchema = new Schema(
  {
    label: { type: String, required: true },
    href: { type: String, required: true },
    order: { type: Number, default: 0 },
    isExternal: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Navbar || model("Navbar", NavbarSchema);

