import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function PATCH(req, context) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await context.params;
    const { role } = await req.json();

    if (!["admin", "user"].includes(role)) {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }

    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Role updated", user });
  } catch (error) {
    console.error("Update Role Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
