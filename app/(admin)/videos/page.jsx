"use client";
import React from "react";
import AddVideoForm from "@/components/admin/AddVideos";
import VideoList from "@/components/admin/VideoList";

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Videos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddVideoForm />
        </div>
        <div className="lg:col-span-2">
          <VideoList />
        </div>
      </div>
    </div>
  );
}
