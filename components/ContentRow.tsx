"use client";

import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentRowProps {
  title: string;
  endpoint: string;
}

export default function ContentRow({ title, endpoint }: ContentRowProps) {
  const [content, setContent] = useState<any[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        // Handle both array responses and object responses with results property
        if (Array.isArray(data)) {
          setContent(data);
        } else if (data && Array.isArray(data.results)) {
          setContent(data.results);
        } else {
          console.error("Invalid data format:", data);
          setContent([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
        setContent([]);
      });
  }, [endpoint]);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`scroll-${title}`);
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="relative group">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Grid */}
        <div
          id={`scroll-${title}`}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {content.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
