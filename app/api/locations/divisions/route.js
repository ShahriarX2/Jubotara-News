import { NextResponse } from "next/server";
import { getDivisions } from "@/lib/localData";

export async function GET() {
  try {
    const data = await getDivisions();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET Divisions Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch divisions" },
      { status: 500 }
    );
  }
}
