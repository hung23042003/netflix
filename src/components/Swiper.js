import React from "react";
import { SwiperSlide } from "swiper/react";

const Swiper = ({ movie, children }) => {
  return (
    <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
      {movie.length > 0 &&
        movie.map((item) => (
          <SwiperSlide key={item.id}>{children}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Swiper;
