"use client";

import { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { addToWatchlist, removeFromWatchlist, isInWatchlist, WatchlistItem } from "@/lib/watchlist";

interface WatchlistButtonProps {
  content: any;
  contentType: "movie" | "tv";
  variant?: "default" | "large";
}

export default function WatchlistButton({ content, contentType, variant = "default" }: WatchlistButtonProps) {
  const [inWatchlist, setInWatchlist] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setInWatchlist(isInWatchlist(content.id, contentType));
  }, [content.id, contentType]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item: WatchlistItem = {
      id: content.id,
      title: content.title,
      name: content.name,
      poster_path: content.poster_path,
      backdrop_path: content.backdrop_path,
      vote_average: content.vote_average,
      release_date: content.release_date,
      first_air_date: content.first_air_date,
      media_type: contentType,
      overview: content.overview,
      addedAt: Date.now(),
    };

    if (inWatchlist) {
      removeFromWatchlist(content.id, contentType);
      setInWatchlist(false);
    } else {
      addToWatchlist(item);
      setInWatchlist(true);
    }
  };

  if (!mounted) return null;

  if (variant === "large") {
    return (
      <button
        onClick={handleToggle}
        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
          inWatchlist
            ? "bg-white/20 hover:bg-white/30 text-white"
            : "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white"
        }`}
      >
        {inWatchlist ? (
          <>
            <Check className="w-5 h-5" />
            In Watchlist
          </>
        ) : (
          <>
            <Plus className="w-5 h-5" />
            Add to Watchlist
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-all ${
        inWatchlist
          ? "bg-primary text-white"
          : "bg-white/10 hover:bg-white/20 text-white"
      }`}
      title={inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    >
      {inWatchlist ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
  );
}
