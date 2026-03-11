import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function DELETE(req, context) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await context.params;

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User deleted successfully",
      userId: id,
    });
  } catch (error) {
    console.error("Delete User Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
