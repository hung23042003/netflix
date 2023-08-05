import React from "react";
import { tmdbApi } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import OverLay from "./OverLay";
import Image from "../Image";

const BannerItem = ({ item }) => {
  const { title, backdrop_path, id, poster_path, overview } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen">
      <OverLay></OverLay>
      <Image
        className="h-screen"
        url={tmdbApi.imagesOriginal(backdrop_path)}
      ></Image>
      <div className="absolute inset-0 flex justify-center items-center gap-x-10 px-[8%]">
        <div className=" max-w-[700px] flex-grow basis-0">
          <h2 className="text-4xl font-semibold mb-6 ">{title}</h2>
          <p className="text-sm font-medium mb-10">{overview}</p>
          <Button
            className={
              "px-5 py-3 font-semibold text-xl bg-primary  hover:px-6  transition-[padding] duration-300"
            }
            onClick={() => navigate(`/movies/${id}`)}
          >
            Watch now
          </Button>
        </div>
        <div className="flex-1 flex-grow basis-0">
          <img
            src={tmdbApi.images500(poster_path)}
            alt="img"
            className="w-[320px] h-[480px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
