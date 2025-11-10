import { NextResponse } from "next/server";
import { getByGenre } from "@/lib/tmdb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const movies = await getByGenre(parseInt(params.id), "movie");
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch movies by genre" }, { status: 500 });
  }
}
