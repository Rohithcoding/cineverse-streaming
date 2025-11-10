import { NextResponse } from "next/server";
import { getPopular } from "@/lib/tmdb";

export async function GET() {
  try {
    const shows = await getPopular("tv");
    return NextResponse.json(shows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch popular TV shows" }, { status: 500 });
  }
}
