import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import ContinueWatching from "@/components/ContinueWatching";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <ContinueWatching />
      <ContentRow title="Trending Movies" endpoint="/api/movies/trending" />
      <ContentRow title="Popular TV Shows" endpoint="/api/tv/popular" />
      <ContentRow title="Top Rated Movies" endpoint="/api/movies/top-rated" />
      <ContentRow title="Action Movies" endpoint="/api/movies/genre/28" />
      <ContentRow title="Comedy Movies" endpoint="/api/movies/genre/35" />
    </div>
  );
}
