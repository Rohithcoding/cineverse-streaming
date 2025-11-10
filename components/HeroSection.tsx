"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import { getImageUrl } from "@/lib/tmdb";
import WatchlistButton from "./WatchlistButton";

export default function HeroSection() {
  const [featured, setFeatured] = useState<any>(null);

  useEffect(() => {
    fetch("/api/movies/trending")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setFeatured(data[0]);
        }
      });
  }, []);

  if (!featured) {
    return (
      <div className="relative h-[70vh] bg-secondary animate-pulse rounded-lg" />
    );
  }

  return (
    <div className="relative h-[70vh] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <Image
        src={getImageUrl(featured.backdrop_path, "original")}
        alt={featured.title || featured.name}
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {featured.title || featured.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 line-clamp-3">
            {featured.overview}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/watch/movie/${featured.id}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              <Play className="w-5 h-5" fill="white" />
              Watch Now
            </Link>
            <WatchlistButton content={featured} contentType="movie" variant="large" />
            <Link
              href={`/watch/movie/${featured.id}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
