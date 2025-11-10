import { NextResponse } from "next/server";
import { getTrending } from "@/lib/tmdb";

export async function GET() {
  try {
    const movies = await getTrending("movie");
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch trending movies" }, { status: 500 });
  }
}
