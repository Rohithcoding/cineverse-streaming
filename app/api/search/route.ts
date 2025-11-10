import { NextResponse } from "next/server";
import { searchContent } from "@/lib/tmdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    const results = await searchContent(query);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: "Failed to search content" }, { status: 500 });
  }
}
