import React from "react";
import { tmdbApi } from "../../config";
import { useNavigate } from "react-router-dom";
import PlayIcon from "../icon/PlayIcon";
import Image from "../Image";

const MovieItem = ({ item }) => {
  const { title, backdrop_path, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col rounded-2xl select-none relative">
      <div className="relative">
        <Image
          url={tmdbApi.images500(backdrop_path || poster_path)}
          className={"rounded-2xl h-[150px] sm:h-[300px]"}
        ></Image>
        <div className=" absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0  hover:opacity-100 ">
          <span
            className="p-2 bg-primary rounded-full"
            onClick={() => navigate(`/movies/${id}`)}
          >
            <PlayIcon className={"text-white h-5 w-5"}></PlayIcon>
          </span>
        </div>
      </div>
      <h3 className="text-sm font-medium mt-5">{title}</h3>
    </div>
  );
};

export default MovieItem;
