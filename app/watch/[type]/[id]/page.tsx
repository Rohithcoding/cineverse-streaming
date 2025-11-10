import { Suspense } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import MovieDetails from "@/components/MovieDetails";
import { getContentDetails } from "@/lib/tmdb";

export default async function WatchPage({
  params,
}: {
  params: { type: string; id: string };
}) {
  const { type, id } = params;
  const contentType = type === "movie" ? "movie" : "tv";
  
  const details = await getContentDetails(contentType, id);

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-[60vh] bg-secondary animate-pulse rounded-lg" />}>
        <VideoPlayer 
          contentId={id} 
          contentType={contentType} 
          title={details.title || details.name}
          details={details}
        />
      </Suspense>
      
      <div className="mt-8">
        <MovieDetails details={details} contentType={contentType} />
      </div>
    </div>
  );
}
