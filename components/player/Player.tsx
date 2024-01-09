"use client";

import AudioPlayer from "react-h5-audio-player";
import tracks from "@/utils/tracks";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

function Player() {
  const [song, setSong] = useState<{ song: string; name: string } | any>({});
  return (
    <div className="py-12 bg-[#F3F4F6] px-5">
      <div className="text-center max-w-[600px] my-0 mx-auto">
        <h1 className="text-slate-600">Our portfolio</h1>
        <h2 className="text-3xl font-semibold text-[#8AED97]">
          Recent Records
        </h2>
        <p className="py-3 text-slate-600">
          Explore our recent records, showcasing our musical expertise and
          creativity.
        </p>
      </div>
      <div className="max-w-[900px] my-0 mx-auto">
        <div>
          {tracks.map((track, title) => (
            <div
              key={title}
              onClick={() =>
                setSong({ song: track.audioSrc, name: track.title })
              }
              className={`${
                song.name === track.title ? `bg-[#8AED97]` : `bg-[#AD8987]`
              } text-white py-3 my-2 px-4 cursor-pointer rounded`}
            >
              <div className="flex items-center justify-between">
                <h2>{track.title}</h2>
                <h2 className="flex-1 text-center">By: {track.artist}</h2>
                <p>
                  Status:{" "}
                  {song.name === track.title ? `Playing` : `Not Playing`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <AudioPlayer
            autoPlay
            src={song.song}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
