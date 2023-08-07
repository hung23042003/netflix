import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import { useParams } from "react-router-dom";
import { fetcher, tmdbApi } from "../../config";
import useSWR from "swr";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  // console.log(data);
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
};

export default MovieSimilar;
