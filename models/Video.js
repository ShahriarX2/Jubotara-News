import mongoose, { Schema, model } from "mongoose";

const VideoSchema = new Schema(
  {
    title: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    videoId: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Video || model("Video", VideoSchema);
