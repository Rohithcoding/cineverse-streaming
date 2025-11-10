"use client";

import { useEffect, useState } from "react";
import { getWatchlist, WatchlistItem } from "@/lib/watchlist";
import ContentCard from "@/components/ContentCard";
import { Bookmark, Trash2 } from "lucide-react";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<"all" | "movie" | "tv">("all");

  useEffect(() => {
    setMounted(true);
    loadWatchlist();
  }, []);

  const loadWatchlist = () => {
    const items = getWatchlist();
    setWatchlist(items);
  };

  const clearAll = () => {
    if (confirm("Are you sure you want to clear your entire watchlist?")) {
      localStorage.removeItem("watchlist");
      setWatchlist([]);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const filteredWatchlist = watchlist.filter((item) => {
    if (filter === "all") return true;
    return item.media_type === filter;
  });

  return (
    <div className="min-h-screen space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bookmark className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">My Watchlist</h1>
            <p className="text-gray-400 mt-1">
              {watchlist.length} {watchlist.length === 1 ? "item" : "items"} saved
            </p>
          </div>
        </div>

        {watchlist.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      {watchlist.length > 0 && (
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80 text-gray-300"
            }`}
          >
            All ({watchlist.length})
          </button>
          <button
            onClick={() => setFilter("movie")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === "movie"
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80 text-gray-300"
            }`}
          >
            Movies ({watchlist.filter((i) => i.media_type === "movie").length})
          </button>
          <button
            onClick={() => setFilter("tv")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === "tv"
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80 text-gray-300"
            }`}
          >
            TV Shows ({watchlist.filter((i) => i.media_type === "tv").length})
          </button>
        </div>
      )}

      {/* Content */}
      {filteredWatchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Bookmark className="w-20 h-20 text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your watchlist is empty</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            {filter === "all"
              ? "Start adding movies and TV shows you want to watch later"
              : `No ${filter === "movie" ? "movies" : "TV shows"} in your watchlist yet`}
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all"
          >
            Browse Content
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredWatchlist.map((item) => (
            <ContentCard key={`${item.media_type}-${item.id}`} content={item} />
          ))}
        </div>
      )}
    </div>
  );
}
