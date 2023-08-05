import { fetcher } from "../config";
import useSWR from "swr";
export default function useFetchData({ url }) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const movies = data?.results || [];
  //   if (!movies || movies.length < 0) return null;
  console.log(movies);
  return { movies };
}

// ("https://api.themoviedb.org/3/movie/upcoming?api_key=fb7a0b87d34655117e5bb075e5c6ee5c");
