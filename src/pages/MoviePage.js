import React, { useContext, useEffect, useState } from "react";
import { fetcher, tmdbApi } from "../config";
import useSWR from "swr";
import MovieItem from "../components/movie/MovieItem";
import useDebounce from "../hooks/useDebounce";
import Button from "../components/button/Button";
import { MovieContext } from "../context/MovieContext";
import Input from "../components/input/Input";

const MoviePage = () => {
  // const { query, setQuery } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  // console.log(query);
  // const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);
  // const [url, setUrl] = useState(tmdbApi.getMovieList("popular"));
  // const queryDebounce = useDebounce(query, 1000);
  // function handleChangeQuery(e) {
  //   setQuery(e.target.value);
  // }
  // console.log(queryDebounce);
  // const { data } = useSWR(url, fetcher);
  // for (let i = 0; i < page; i++) {}

  // useEffect(() => {
  //   if (queryDebounce) {
  //     setUrl(tmdbApi.getMovieSeach(queryDebounce, page));
  //   } else {
  //     setUrl(tmdbApi.getMovieList("popular", page));
  //   }
  // }, [queryDebounce, page]);
  // const movie = data?.results || [];
  // if (!movie || movie.length < 0) return null;
  // console.log(movie);
  const [cnt, setCnt] = useState(2);
  const pages = [];
  console.log(pages);
  for (let i = 1; i < cnt; i++) {
    pages.push(<Page page={i} query={query} key={i}></Page>);
  }

  return (
    <div className="px-[8%] pt-24 pb-10 ">
      <div className="relative max-w-[450px] rounded-3xl overflow-hidden mb-16">
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter keyword"
          className=" bg-black px-5 py-2 rounded-3xl w-full"
        />
        {/* <Input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter keyword"
          className=" bg-black px-5 py-2 rounded-3xl"
        ></Input> */}
        <Button className="px-5 py-2 bg-primary rounded-full absolute right-0">
          Search
        </Button>
      </div>
      {pages}
      <div className="text-center">
        <Button
          className="border-2 border-solid border-white bg-transparent px-4 py-2"
          onClick={() => setCnt(cnt + 1)}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

function Page({ page, query }) {
  const [url, setUrl] = useState(tmdbApi.getMovieList("popular"));
  const queryDebounce = useDebounce(query, 1000);
  useEffect(() => {
    if (queryDebounce) {
      setUrl(tmdbApi.getMovieSeach(queryDebounce, page));
    } else {
      setUrl(tmdbApi.getMovieList("popular", page));
    }
  }, [queryDebounce, page]);
  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  if (!movies || movies.length < 0) return null;
  return (
    <>
      <div className="grid grid-cols-4 gap-10 mb-10">
        {movies.map((item) => (
          <MovieItem key={item.id} item={item}></MovieItem>
        ))}
      </div>
    </>
  );
}

export default MoviePage;
