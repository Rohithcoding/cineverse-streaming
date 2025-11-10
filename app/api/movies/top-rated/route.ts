import { NextResponse } from "next/server";
import { getTopRated } from "@/lib/tmdb";

export async function GET() {
  try {
    const movies = await getTopRated("movie");
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch top rated movies" }, { status: 500 });
  }
}
