import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Video from "@/models/Video";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// -------------------------
// POST: Add YouTube Video (Protected)
// -------------------------
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, youtubeUrl } = body;

    if (!title || !youtubeUrl) {
      return NextResponse.json(
        { error: "Title and YouTube URL required" },
        { status: 400 },
      );
    }

    const videoId = extractVideoId(youtubeUrl);
    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 },
      );
    }

    await dbConnect();
    const newVideo = await Video.create({
      title,
      youtubeUrl,
      videoId,
    });

    return NextResponse.json(
      { success: true, data: newVideo },
      { status: 201 },
    );
  } catch (error) {
    console.error("Add Video Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// -------------------------
// GET: Fetch Videos
// -------------------------
export async function GET() {
  try {
    await dbConnect();
    const videos = await Video.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: videos }, { status: 200 });
  } catch (error) {
    console.error("Get Videos Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// -------------------------
// DELETE: Delete Video by ID (Protected)
// -------------------------
export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 },
      );
    }

    await dbConnect();
    const deletedVideo = await Video.findByIdAndDelete(id);

    if (!deletedVideo) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, message: "Video deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete Video Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function extractVideoId(url) {
  if (!url) return null;
  const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
