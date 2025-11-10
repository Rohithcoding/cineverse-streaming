"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchResults from "@/components/SearchResults";
import { Search } from "lucide-react";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies or TV shows..."
            className="w-full bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {searchQuery && <SearchResults query={searchQuery} />}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
