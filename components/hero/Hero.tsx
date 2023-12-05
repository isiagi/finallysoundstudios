"use client";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/images/nexus6.jpg",
    caption: "Sounds From The Baddest Producer",
    heading: "Nexus Bless This Beat",
  },
  {
    url: "/images/nexus.jpg",
    caption: "Your Music Journey Starts Here",
    heading: "BeatSkills Academy",
  },
  {
    url: "/images/nexus5.jpeg",
    caption: "Where Waves Become Melodies, and Silence Finds its Voice.",
    heading: "Nexus Bless This Beat",
  },
];

function Hero() {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="flex items-center bg-center h-[88vh] bg-blend-overlay bg-[#00000099]"
              style={{
                backgroundImage: `url('${slideImage.url}')`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-12">
                <h1 className="text-4xl text-white font-medium">
                  {slideImage.heading}
                </h1>
                <p className="text-xl py-2 text-white font-medium max-w-[450px]">
                  {slideImage.caption}
                </p>
                <button className="bg-[#E6CA30] text-white px-4 py-3 rounded">
                  Unlock Your Potential
                </button>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Hero;
