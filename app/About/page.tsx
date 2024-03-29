import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import HomeServices from "@/components/homeServices/HomeServices";
import Player from "@/components/player/Player";
import Why from "@/components/why/Why";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <HeaderBanner name="About Us" bgPhoto="/images/nexus6.jpg" />
      <div className="flex flex-col gap-5 pb-10 bg-[#F3F4F6]">
        {/* section one */}
        <div className="h-fit grid grid-cols-fluid relative px-5 md:gap-10 gap-5">
          <div className="py-20 flex flex-col md:items-end">
            <Image
              src={"/images/nexus6.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className=" md:h-[400px] h-[250px] w-[350px] rounded-[20px]"
            />
            <Image
              src={"/images/nexus5.jpeg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className=" md:h-[400px] h-[250px] w-[350px] absolute left-10 top-32 rounded-[20px]"
            />
          </div>
          <div className="md:py-20 py-0 leading-7">
            <p className="text-[#AD8987]">— Our mission</p>
            <h3 className="text-2xl font-bold text-[#8AED97]">Nexus Beats</h3>
            <p className="text-slate-600">
              Our mission at Nexus Beats is to transform music into immersive
              experiences. We craft sonic art that resonates emotionally and
              sets new standards of excellence. We&apos;re dedicated to pushing
              boundaries and delivering captivating, top-tier sonic landscapes.
            </p>

            <button className="bg-[#ED837E] text-white mt-7 p-2 rounded">

              Get In Touch
            </button>
          </div>
        </div>
        {/* section two */}
        <div className="h-fit grid grid-cols-fluid relative px-5 md:gap-10 gap-2">
          <div className="md:py-20 py-0 leading-7">
            <p className="text-[#AD8987]">— Our mission</p>
            <h3 className="text-2xl font-bold text-[#8AED97]">
              BeatSkills Academy
            </h3>
            <p className="text-slate-600">
              At Beatskills Academy, our mission is simple: to inspire through
              music, nurturing talent, and fostering a deep appreciation for
              diverse genres. With seasoned professionals, we guide individuals
              of all levels towards their musical aspirations, creating a
              vibrant community where passion thrives.
            </p>

            <button className="bg-[#ED837E] text-white mt-7 p-2 rounded">

              Get In Touch
            </button>
          </div>
          <div className="md:py-20 py-0 px-5 flex flex-col md:items-start items-end">
            <Image
              src={"/images/nexus6.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className=" md:h-[400px] h-[250px] w-[350px] rounded-[20px]"
            />
            <Image
              src={"/images/nexus5.jpeg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className=" md:h-[400px] h-[250px] w-[350px] absolute md:right-32 -right-5 md:inline-block hidden md:top-32 rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <Why />
      <Player />
      <HomeServices />
    </div>
  );
}

export default page;
