import { createContext, useState } from "react";
import useNavigate from "../hooks/useNavigate";

const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [logged, setLogged] = useState(false);
  // const navigate = useNavigate();
  return (
    <MovieContext.Provider value={{ query, setQuery, logged, setLogged }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
