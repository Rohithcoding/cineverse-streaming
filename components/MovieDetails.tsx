import Image from "next/image";
import { Star, Calendar, Clock } from "lucide-react";
import { getImageUrl } from "@/lib/tmdb";
import WatchlistButton from "./WatchlistButton";

interface MovieDetailsProps {
  details: any;
  contentType: "movie" | "tv";
}

export default function MovieDetails({ details, contentType }: MovieDetailsProps) {
  const title = details.title || details.name;
  const releaseDate = details.release_date || details.first_air_date;
  const runtime = details.runtime || details.episode_run_time?.[0];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <div className="flex-shrink-0">
          <div className="relative w-48 aspect-[2/3] rounded-lg overflow-hidden">
            <Image
              src={getImageUrl(details.poster_path)}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm">
            {details.vote_average && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="font-semibold">{details.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">/ 10</span>
              </div>
            )}
            {releaseDate && (
              <div className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{new Date(releaseDate).getFullYear()}</span>
              </div>
            )}
            {runtime && (
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{runtime} min</span>
              </div>
            )}
          </div>

          {/* Watchlist Button */}
          <div>
            <WatchlistButton content={details} contentType={contentType} variant="large" />
          </div>

          {/* Genres */}
          {details.genres && details.genres.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {details.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{details.overview}</p>
          </div>

          {/* Cast */}
          {details.credits?.cast && details.credits.cast.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-2">
                {details.credits.cast.slice(0, 5).map((person: any) => (
                  <span key={person.id} className="text-sm text-gray-400">
                    {person.name}
                  </span>
                )).reduce((prev: any, curr: any) => [prev, " • ", curr])}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Content */}
      {details.similar?.results && details.similar.results.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Similar {contentType === "movie" ? "Movies" : "Shows"}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {details.similar.results.slice(0, 6).map((item: any) => (
              <a
                key={item.id}
                href={`/watch/${contentType}/${item.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={getImageUrl(item.poster_path)}
                    alt={item.title || item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm line-clamp-2">{item.title || item.name}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
