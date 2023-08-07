import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, tmdbApi } from "../config";
import useSWR from "swr";
import Comment from "../components/Comment";
import MovieCredit from "../components/movie/MovieCredit";
import MovieVideo from "../components/movie/MovieVideo";
import MovieSimilar from "../components/movie/MovieSimilar";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieDetail(movieId), fetcher);
  if (!data) return null;
  // console.log(data);
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="relative w-full h-screen mb-10">
        <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        <img
          src={tmdbApi.imagesOriginal(backdrop_path)}
          alt="img"
          className="w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 flex items-center justify-center px-[8%]">
          <div className="flex gap-x-8">
            <div className="">
              <img
                src={tmdbApi.images500(poster_path)}
                alt="img"
                className="w-[320px] h-[480px] object-cover rounded-2xl"
              />
            </div>
            <div className=" max-w-[600px] flex-grow basis-0">
              <h2 className="text-4xl font-semibold mb-6 ">{title}</h2>
              <div className="flex gap-x-1 mb-5">
                {data.genres.length > 0 &&
                  data.genres.map((item) => (
                    <span
                      className="px-4 py-1 border-2 border-solid border-white rounded-full"
                      key={item.id}
                    >
                      {item.name}
                    </span>
                  ))}
              </div>
              <p className="text-sm font-medium mb-5">{overview}</p>
              <MovieCredit></MovieCredit>
            </div>
          </div>
        </div>
      </div>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
      <Comment></Comment>
    </>
  );
};

export default MovieDetailPage;
