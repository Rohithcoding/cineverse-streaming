import ContentRow from "@/components/ContentRow";

export const metadata = {
  title: "Movies - Cineverse",
  description: "Browse and watch movies online for free",
};

export default function MoviesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold">Movies</h1>
        <p className="text-gray-400 text-lg">Discover and watch thousands of movies</p>
      </div>

      <ContentRow title="Trending Now" endpoint="/api/movies/trending" />
      <ContentRow title="Top Rated" endpoint="/api/movies/top-rated" />
      <ContentRow title="Action Movies" endpoint="/api/movies/genre/28" />
      <ContentRow title="Comedy Movies" endpoint="/api/movies/genre/35" />
      <ContentRow title="Drama Movies" endpoint="/api/movies/genre/18" />
      <ContentRow title="Horror Movies" endpoint="/api/movies/genre/27" />
      <ContentRow title="Sci-Fi Movies" endpoint="/api/movies/genre/878" />
      <ContentRow title="Thriller Movies" endpoint="/api/movies/genre/53" />
      <ContentRow title="Romance Movies" endpoint="/api/movies/genre/10749" />
      <ContentRow title="Animation Movies" endpoint="/api/movies/genre/16" />
    </div>
  );
}
