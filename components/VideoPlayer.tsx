"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

interface VideoPlayerProps {
  contentId: string;
  contentType: "movie" | "tv";
  title: string;
  details?: any;
}

export default function VideoPlayer({ contentId, contentType, title, details }: VideoPlayerProps) {
  const [selectedSource, setSelectedSource] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Multiple streaming sources (cleaner, ad-reduced options)
  const streamingSources = [
    {
      name: "VidSrc",
      url: `https://vidsrc.xyz/embed/${contentType}/${contentId}`,
    },
    {
      name: "VidSrc Pro",
      url: `https://vidsrc.pro/embed/${contentType}/${contentId}`,
    },
    {
      name: "VidSrc CC",
      url: `https://vidsrc.cc/v2/embed/${contentType}/${contentId}`,
    },
    {
      name: "AutoEmbed",
      url: `https://player.autoembed.cc/embed/${contentType}/${contentId}`,
    },
  ];

  useEffect(() => {
    // Save to watch history with complete data
    const history = JSON.parse(localStorage.getItem("watchHistory") || "[]");
    const newItem = {
      id: parseInt(contentId),
      title: details?.title || details?.name || title,
      name: details?.name || details?.title || title,
      poster_path: details?.poster_path || "",
      backdrop_path: details?.backdrop_path || "",
      vote_average: details?.vote_average || 0,
      release_date: details?.release_date || "",
      first_air_date: details?.first_air_date || "",
      media_type: contentType,
      overview: details?.overview || "",
    };
    const filtered = history.filter((item: any) => item.id !== parseInt(contentId));
    localStorage.setItem("watchHistory", JSON.stringify([newItem, ...filtered].slice(0, 20)));
  }, [contentId, title, contentType, details]);

  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        <iframe
          src={streamingSources[selectedSource].url}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-forms allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Source Selector */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-gray-400 self-center">Select Server:</span>
        {streamingSources.map((source, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedSource(index);
              setIsLoading(true);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedSource === index
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-secondary/80 text-gray-300"
            }`}
          >
            {source.name}
          </button>
        ))}
      </div>

      {/* Info Banner */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-gray-300">
          <strong>Tip:</strong> If the video doesn't load, try switching to a different server above.
          All streams are embedded from third-party sources. We recommend using an ad-blocker browser extension for the best experience.
        </p>
      </div>
      
      {/* Ad Blocker Recommendation */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
        <p className="text-sm text-yellow-200">
          <strong>⚠️ Ad-Free Viewing:</strong> For the best ad-free experience, we recommend installing an ad-blocker extension like 
          <strong> uBlock Origin</strong> or <strong>AdBlock Plus</strong> in your browser. This will block unwanted ads from third-party streaming sources.
        </p>
      </div>
    </div>
  );
}
