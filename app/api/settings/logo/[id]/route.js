import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Logo from "@/models/Logo";
import { deleteFromCloudinary } from "@/utils/cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// DELETE /api/settings/logo/[id] (Protected)
export async function DELETE(req, context) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    await dbConnect();

    const logo = await Logo.findById(id);
    if (!logo) {
      return NextResponse.json(
        { success: false, message: "Logo not found" },
        { status: 404 },
      );
    }

    // Delete from Cloudinary
    if (logo.publicId) {
      try {
        await deleteFromCloudinary(logo.publicId);
      } catch (err) {
        console.error("Cloudinary delete error:", err);
      }
    }

    // Delete from DB
    await Logo.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Logo deleted" });
  } catch (error) {
    console.error("Delete Logo Error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete logo" }, { status: 500 });
  }
}
