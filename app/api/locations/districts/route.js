import { NextResponse } from "next/server";
import { getDistricts } from "@/lib/localData";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const divisionId = searchParams.get("division_id");

    if (!divisionId) {
      return NextResponse.json(
        { success: false, message: "Division ID is required" },
        { status: 400 }
      );
    }

    const data = await getDistricts(divisionId);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET Districts Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch districts" },
      { status: 500 }
    );
  }
}
