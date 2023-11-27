"use client";

import AudioPlayer from "react-h5-audio-player";
import tracks from "@/utils/tracks";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

function Player() {
  const [song, setSong] = useState<{ song: string; name: string } | {}>({});
  return (
    <div className="py-12 bg-slate-400">
      <div className="text-center max-w-[600px] my-0 mx-auto">
        <h1>Our portfolio</h1>
        <h2 className="text-3xl font-semibold">Recent Records</h2>
        <p className="py-3">
          Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas,
          vulputate lacus eget, sodales odio. Mauris suscipit eleifend mauris.
          Curabitur fermentum.
        </p>
      </div>
      <div className="max-w-[900px] my-0 mx-auto">
        <div>
          {tracks.map((track) => (
            <div
              key={track.title}
              onClick={() =>
                setSong({ song: track.audioSrc, name: track.title })
              }
              className="bg-gray-500 py-3 my-2 px-4 cursor-pointer rounded"
            >
              <div className="flex items-center justify-between">
                <h2>Title: {track.title}</h2>
                <h2 className="flex-1 text-center">Artist: {track.artist}</h2>
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
