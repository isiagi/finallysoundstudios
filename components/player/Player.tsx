"use client";

import AudioPlayer from "react-h5-audio-player";
import tracks from "@/utils/tracks";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

function Player() {
  const [song, setSong] = useState<{ song: string; name: string } | {}>({});
  return (
    <div>
      <div className="max-w-[900px] my-0 mx-auto">
        <div>
          {tracks.map((track) => (
            <div
              key={track.title}
              onClick={() =>
                setSong({ song: track.audioSrc, name: track.title })
              }
            >
              <div>
                <h2>{track.title}</h2>
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
