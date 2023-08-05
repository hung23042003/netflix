import React, { Fragment } from "react";
import { fetcher, tmdbApi } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import BannerItem from "./BannerItem";
import useFetchData from "../../hooks/useFetchData";

const Banner = () => {
  // const { movies } = useFetchData(
  //   "https://api.themoviedb.org/3/movie/upcoming?api_key=fb7a0b87d34655117e5bb075e5c6ee5c"
  // );
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=fb7a0b87d34655117e5bb075e5c6ee5c",
    fetcher
  );
  const movies = data?.results || [];
  if (!movies || movies.length < 0) return null;
  // console.log(movie);
  return (
    <div className=" relative z-0">
      <section className="banner relative">
        <Swiper grabCursor={"true"} spaceBetween={0} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
