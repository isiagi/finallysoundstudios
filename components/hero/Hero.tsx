"use client";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/images/nexus1.jpeg",
    caption: "Slide 1",
  },
  {
    url: "/images/nexus4.jpeg",
    caption: "Slide 2",
  },
  {
    url: "/images/nexus5.jpeg",
    caption: "Slide 3",
  },
];

function Hero() {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url('${slideImage.url}')` }}
              className="flex items-center bg-cover bg-center h-[88vh] bg-blend-overlay bg-[#00000099]"
            >
              <div className="px-12">
                <h1 className="text-4xl text-white font-medium">
                  Nexus Bless This Beat
                </h1>
                <p className="text-xl py-2 text-white font-medium max-w-[450px]">
                  Where Waves Become Melodies, and Silence Finds its Voice.
                </p>
                <button className="bg-blue-500 text-white px-4 py-3 rounded">
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
