import React, { Fragment } from "react";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieList = ({ type = "now_playing", title }) => {
  const navigate = useNavigate();
  const { data } = useSWR(tmdbApi.getMovieList(type), fetcher);
  const movie = data?.results || [];
  if (!movie || movie.length < 0) return null;
  // console.log(movie);
  return (
    <>
      <section className="mt-10">
        <div className="flex items-center justify-between px-[8%] py-7">
          <h2 className="text-base font-semibold">{title}</h2>
          <Button
            className="text-sm px-5 py-1 border border-solid border-white "
            onClick={() => navigate("/movies")}
          >
            View more
          </Button>
        </div>
        <div className="movie-list px-[8%] mb-10">
          <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={20}>
            {movie.length > 0 &&
              movie.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieItem item={item}></MovieItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MovieList;
