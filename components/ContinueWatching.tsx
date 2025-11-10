"use client";

import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

export default function ContinueWatching() {
  const [watchHistory, setWatchHistory] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const history = localStorage.getItem("watchHistory");
    if (history) {
      try {
        const parsed = JSON.parse(history);
        setWatchHistory(parsed);
      } catch (error) {
        console.error("Error parsing watch history:", error);
      }
    }
  }, []);

  // Don't render on server
  if (!mounted) {
    return null;
  }

  if (watchHistory.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold">Continue Watching</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {watchHistory.slice(0, 10).map((item, index) => (
          <ContentCard key={`${item.id}-${index}`} content={item} />
        ))}
      </div>
    </div>
  );
}
