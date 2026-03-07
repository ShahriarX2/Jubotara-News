"use client";

import { useState } from "react";
import { useAddVideoMutation } from "@/app/redux/features/youtubeVideo/videoApi";

export default function AddVideoForm() {
  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [message, setMessage] = useState("");

  const [addVideo, { isLoading }] = useAddVideoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const videoData = { title, youtubeUrl };

    try {
      // unwrap returns the actual response or throws an error
      await addVideo(videoData).unwrap();

      setMessage("Video added successfully!");
      setTitle("");
      setYoutubeUrl("");
    } catch (err) {
      // Proper type-safe error handling
      const apiError = err;
      setMessage(apiError?.data?.error || "Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Add YouTube Video</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="YouTube URL"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {isLoading ? "Adding..." : "Add Video"}
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
