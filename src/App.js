import React, { Suspense, lazy, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import SignInPage from "./pages/SignInPage";
import { MovieContext } from "./context/MovieContext";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  // const [logged, setLogged] = useState(false);
  const { logged } = useContext(MovieContext);
  // console.log(logged);
  return (
    <Suspense>
      <>
        <Routes>
          <Route
            path="/"
            element={logged ? <HomePage></HomePage> : <SignInPage></SignInPage>}
          ></Route>
          <Route element={<Main></Main>}>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
        </Routes>
      </>
    </Suspense>
  );
};

export default App;
