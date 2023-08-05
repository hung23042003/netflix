import React from "react";

const Comment = () => {
  return (
    <div className="px-[8%] mb-10">
      <h2 className="text-3xl font-semibold mb-10">Comment</h2>
      <div className="bg-white h-[400px] text-black p-5">
        <p className="text-xl font-semibold">
          Đừng quên để like page của{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/NetflixVietnam"
            className="text-red-600 text-2xl"
            rel="noreferrer"
          >
            Netflix
          </a>{" "}
          để cập nhật phim mới mỗi ngày
        </p>
        <h2 className="text-sm">
          Tham gia Discord{" "}
          <a
            target="_blank"
            href="https://discord.com/invite/AUNt59q"
            className="text-red-500 "
            rel="noreferrer"
          >
            tại đây!!
          </a>
          hoặc Telegram{" "}
          <a
            target="_blank"
            href="https://t.me/animevietsub"
            className="text-red-500 "
            rel="noreferrer"
          >
            tại đây!!
          </a>
          để nhận thông báo mới nhanh nhất.
        </h2>
        <h4 className="mt-6 font-medium text-lg">0 bình luận </h4>
        <div className="flex items-center gap-4 mt-5">
          <img src="/user.png" alt="img" className="w-10 h-10" />
          <textarea
            className="flex-1 border  p-3"
            placeholder="Viết bình luận..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Comment;
