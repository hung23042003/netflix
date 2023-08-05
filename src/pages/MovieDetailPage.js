import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, tmdbApi } from "../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../components/movie/MovieItem";
import Video from "../components/Video";
import Comment from "../components/Comment";

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

function MovieCredit() {
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
}

function MovieVideo() {
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
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  console.log(data);
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="px-[8%] mb-10">
      <h2 className="text-3xl font-semibold mb-10">Similar</h2>
      <div className="movie-list ">
        <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem item={item}></MovieItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailPage;
