import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div>
      <HeaderBanner name="Services" />
      <div className="px-5">
        <div className="grid grid-cols-fluid relative">
          <div className="max-w-[400px]">
            <p> — Recording</p>
            <h3 className="text-2xl font-bold">
              CAPTURING YOUR MELODIES , CRAFTING YOUR SOUND
            </h3>
            <p className="text-xl">
              Having worked with small independent studios to Abbey Road
              Productions, we understand that larger professional recording
              studios have different needs
            </p>
          </div>
          <div className="relative flex md:justify-center items-center justify-end">
            <Image
              src="https://images.unsplash.com/photo-1509622460822-e6f328c33ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwcHJvZHVjZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-l-full md:w-full md:h-[400px] h-[250px] w-[280px] bg-cover bg-center"
            />
            <div className="absolute  md:-left-20 left-[1rem]">
              <Image
                src="/images/text1.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                }}
                className="animate-rotate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
