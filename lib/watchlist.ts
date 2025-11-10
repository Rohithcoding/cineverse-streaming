// Watchlist/Library management utilities

export interface WatchlistItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  media_type: "movie" | "tv";
  overview: string;
  addedAt: number;
}

export const addToWatchlist = (item: WatchlistItem): boolean => {
  try {
    const watchlist = getWatchlist();
    
    // Check if already in watchlist
    const exists = watchlist.some((w) => w.id === item.id && w.media_type === item.media_type);
    if (exists) {
      return false;
    }

    // Add timestamp
    const newItem = { ...item, addedAt: Date.now() };
    const updated = [newItem, ...watchlist];
    
    localStorage.setItem("watchlist", JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error("Error adding to watchlist:", error);
    return false;
  }
};

export const removeFromWatchlist = (id: number, mediaType: "movie" | "tv"): boolean => {
  try {
    const watchlist = getWatchlist();
    const filtered = watchlist.filter((item) => !(item.id === id && item.media_type === mediaType));
    
    localStorage.setItem("watchlist", JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error("Error removing from watchlist:", error);
    return false;
  }
};

export const isInWatchlist = (id: number, mediaType: "movie" | "tv"): boolean => {
  try {
    const watchlist = getWatchlist();
    return watchlist.some((item) => item.id === id && item.media_type === mediaType);
  } catch (error) {
    console.error("Error checking watchlist:", error);
    return false;
  }
};

export const getWatchlist = (): WatchlistItem[] => {
  try {
    if (typeof window === "undefined") return [];
    
    const stored = localStorage.getItem("watchlist");
    if (!stored) return [];
    
    return JSON.parse(stored);
  } catch (error) {
    console.error("Error getting watchlist:", error);
    return [];
  }
};

export const clearWatchlist = (): void => {
  try {
    localStorage.removeItem("watchlist");
  } catch (error) {
    console.error("Error clearing watchlist:", error);
  }
};
