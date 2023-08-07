import React from "react";

const Video = ({ keyYoutobe }) => {
  return (
    <iframe
      width="930"
      height="523"
      src={`https://www.youtube.com/embed/${keyYoutobe}`}
      title="play video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full object-fill"
    ></iframe>
  );
};

export default Video;
