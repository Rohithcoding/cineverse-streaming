import ContentRow from "@/components/ContentRow";

export const metadata = {
  title: "TV Shows - Cineverse",
  description: "Browse and watch TV shows online for free",
};

export default function TVShowsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold">TV Shows</h1>
        <p className="text-gray-400 text-lg">Discover and watch thousands of TV shows</p>
      </div>

      <ContentRow title="Popular TV Shows" endpoint="/api/tv/popular" />
      <ContentRow title="Top Rated TV Shows" endpoint="/api/tv/top-rated" />
      <ContentRow title="Action & Adventure" endpoint="/api/tv/genre/10759" />
      <ContentRow title="Comedy Shows" endpoint="/api/tv/genre/35" />
      <ContentRow title="Drama Shows" endpoint="/api/tv/genre/18" />
      <ContentRow title="Mystery Shows" endpoint="/api/tv/genre/9648" />
      <ContentRow title="Sci-Fi & Fantasy" endpoint="/api/tv/genre/10765" />
      <ContentRow title="Crime Shows" endpoint="/api/tv/genre/80" />
      <ContentRow title="Documentary" endpoint="/api/tv/genre/99" />
      <ContentRow title="Animation" endpoint="/api/tv/genre/16" />
    </div>
  );
}
