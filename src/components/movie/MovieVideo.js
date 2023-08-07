import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, tmdbApi } from "../../config";
import useSWR from "swr";
import Video from "../Video";

const MovieVideo = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="px-[8%] flex flex-col gap-10 mb-10">
      <h2 className="text-3xl font-semibold">Trailer</h2>
      {results.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="w-full h-full aspect-video overflow-hidden"
        >
          <h2 className="text-lg font-medium py-4">{item.name}</h2>
          <Video keyYoutobe={item.key}></Video>
        </div>
      ))}
    </div>
  );
};

export default MovieVideo;
