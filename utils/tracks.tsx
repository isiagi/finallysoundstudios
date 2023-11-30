import Cali from "@/utils/audio/Hey.mp3";
import song from "@/utils/audio/song.mp3";

interface Audio {
  title: string;
  artist: string;
  audioSrc: any;
  color: string;
}

const music: Audio[] = [
  {
    title: "Cali",
    artist: "Wataboi",
    audioSrc:
      "https://res.cloudinary.com/isiagi/raw/upload/v1701251255/AudioUploads/Hey.mp3",
    //   image: imgSrc,
    color: "#00aeb0",
  },
  {
    title: "50",
    artist: "tobylane",
    audioSrc: song,
    //   image: imgSrc2,
    color: "#ffb77a",
  },
  {
    title: "Testing",
    artist: "DreamHeaven",
    audioSrc:
      "https://res.cloudinary.com/isiagi/raw/upload/v1701251255/AudioUploads/Hey.mp3",
    //   image: imgSrc3,
    color: "#5f9fff",
  },
  {
    title: "Love",
    artist: "tobylane",
    audioSrc: song,
    //   image: imgSrc2,
    color: "#ffb77a",
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc:
      "https://res.cloudinary.com/isiagi/raw/upload/v1701251255/AudioUploads/Hey.mp3",
    //   image: imgSrc3,
    color: "#5f9fff",
  },
];

export default music;
