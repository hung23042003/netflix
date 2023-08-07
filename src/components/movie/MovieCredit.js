import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, tmdbApi } from "../../config";
import useSWR from "swr";

const MovieCredit = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="page-container">
      <h2 className="text-3xl font-semibold ">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div key={item.id}>
            <img
              src={tmdbApi.imagesOriginal(item.profile_path)}
              className="w-full h-[180px] object-cover rounded-lg"
              alt=""
            />
            <h2 className="font-normal text-sm mt-2 ">{item.original_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredit;
