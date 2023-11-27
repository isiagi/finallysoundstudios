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
    audioSrc: Cali,
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
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc: Cali,
    //   image: imgSrc3,
    color: "#5f9fff",
  },
  {
    title: "50",
    artist: "tobylane",
    audioSrc: song,
    //   image: imgSrc2,
    color: "#ffb77a",
  },
  {
    title: "I Wonder",
    artist: "DreamHeaven",
    audioSrc: Cali,
    //   image: imgSrc3,
    color: "#5f9fff",
  },
];

export default music;
