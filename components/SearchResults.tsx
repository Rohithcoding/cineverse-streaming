"use client";

import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Search error:", err);
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-400">No results found for "{query}"</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Search Results for "{query}" ({results.length})
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {results
          .filter((item) => item.media_type !== "person")
          .map((item) => (
            <ContentCard key={`${item.media_type}-${item.id}`} content={item} />
          ))}
      </div>
    </div>
  );
}
