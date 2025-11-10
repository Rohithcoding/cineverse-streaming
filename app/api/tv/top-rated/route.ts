import { NextResponse } from "next/server";
import { getTopRated } from "@/lib/tmdb";

export async function GET() {
  try {
    const shows = await getTopRated("tv");
    return NextResponse.json(shows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch top rated TV shows" }, { status: 500 });
  }
}
