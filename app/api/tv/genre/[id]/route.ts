import { NextResponse } from "next/server";
import { getByGenre } from "@/lib/tmdb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const shows = await getByGenre(parseInt(params.id), "tv");
    return NextResponse.json(shows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch TV shows by genre" }, { status: 500 });
  }
}
