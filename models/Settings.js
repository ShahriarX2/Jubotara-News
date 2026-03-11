import mongoose, { Schema, model } from "mongoose";

const SettingsSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    value: { type: Schema.Types.Mixed, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Settings || model("Settings", SettingsSchema);
