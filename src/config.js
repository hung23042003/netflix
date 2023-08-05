export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "fb7a0b87d34655117e5bb075e5c6ee5c";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
const tmdbEndPointSearch = "https://api.themoviedb.org/3/search/movie";

export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSeach: (query, page = 1) =>
    `${tmdbEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  imagesOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  images500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
