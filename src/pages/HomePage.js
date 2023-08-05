import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const array = [
  { title: "Now playings", type: "now_playing" },
  { title: "Top rated", type: "top_rated" },
  { title: "Trending", type: "popular" },
];

const HomePage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      {array.map((item) => (
        <MovieList
          key={item.type}
          type={item.type}
          title={item.title}
        ></MovieList>
      ))}
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
