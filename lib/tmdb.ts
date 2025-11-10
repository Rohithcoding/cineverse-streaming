const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
}

export async function getTrending(type: "movie" | "tv" = "movie") {
  const res = await fetch(
    `${BASE_URL}/trending/${type}/week?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.results;
}

export async function getPopular(type: "movie" | "tv" = "movie") {
  const res = await fetch(
    `${BASE_URL}/${type}/popular?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.results;
}

export async function getTopRated(type: "movie" | "tv" = "movie") {
  const res = await fetch(
    `${BASE_URL}/${type}/top_rated?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.results;
}

export async function getByGenre(genreId: number, type: "movie" | "tv" = "movie") {
  const res = await fetch(
    `${BASE_URL}/discover/${type}?api_key=${TMDB_API_KEY}&with_genres=${genreId}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.results;
}

export async function searchContent(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.results;
}

export async function getContentDetails(type: "movie" | "tv", id: string) {
  const res = await fetch(
    `${BASE_URL}/${type}/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,similar`,
    { next: { revalidate: 3600 } }
  );
  return await res.json();
}

export async function getStreamingProviders(type: "movie" | "tv", id: string) {
  const res = await fetch(
    `${BASE_URL}/${type}/${id}/watch/providers?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.results;
}

export function getImageUrl(path: string, size: "w500" | "original" = "w500") {
  if (!path) return "/placeholder.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
