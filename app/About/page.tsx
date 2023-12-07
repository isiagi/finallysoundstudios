import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import HomeServices from "@/components/homeServices/HomeServices";
import Player from "@/components/player/Player";
import Why from "@/components/why/Why";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <HeaderBanner name="About Us" />
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
            <p className="text-[#E5E02F]">— Our mission</p>
            <h3 className="text-2xl font-bold text-gray-600">Nexus Beats</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#E6CA30] text-white p-2 rounded">
              Get In Touch
            </button>
          </div>
        </div>
        {/* section two */}
        <div className="h-fit grid grid-cols-fluid relative px-5 md:gap-10 gap-2">
          <div className="md:py-20 py-0 leading-7">
            <p className="text-[#AFE630]">— Our mission</p>
            <h3 className="text-2xl font-bold text-gray-600">
              BeatSkills Academy
            </h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#E6CA30] text-white p-2 rounded">
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
