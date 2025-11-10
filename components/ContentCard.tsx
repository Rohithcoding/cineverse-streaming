import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import { getImageUrl } from "@/lib/tmdb";
import WatchlistButton from "./WatchlistButton";

interface ContentCardProps {
  content: any;
}

export default function ContentCard({ content }: ContentCardProps) {
  const title = content.title || content.name;
  const type = content.media_type || (content.title ? "movie" : "tv");
  const rating = content.vote_average?.toFixed(1) || "N/A";

  return (
    <Link
      href={`/watch/${type}/${content.id}`}
      className="group flex-shrink-0 w-48 md:w-56"
    >
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary">
        <Image
          src={getImageUrl(content.poster_path)}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Play className="w-12 h-12 text-white" fill="white" />
            <span className="text-white font-semibold text-sm">Watch Now</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
          <span className="text-xs font-semibold">{rating}</span>
        </div>

        {/* Watchlist Button */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <WatchlistButton content={content} contentType={type} />
        </div>
      </div>

      <h3 className="mt-2 text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-xs text-gray-400">
        {content.release_date?.split("-")[0] || content.first_air_date?.split("-")[0] || ""}
      </p>
    </Link>
  );
}
