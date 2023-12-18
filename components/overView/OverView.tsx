import Image from "next/image";
import React from "react";

function OverView() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-3xl text-center text-[#AD8987] font-medium mb-5">
        OVER-VIEW
      </h1>
      {/* section one */}
      <div className="grid grid-cols-fluid relative">
        <div className="max-w-[400px]">
          <p className="text-[#AFE630]">
            {" "}
            <span className="text-[#AFE630]">—</span> Record: Craft Sonic
            Brilliance
          </p>
          <h3 className="text-2xl font-bold text-[#AD8987]">
            Audio Production, Mixing & Mastering
          </h3>
          <p className=" text-slate-600 leading-7">
            At Beatskills Academy, we elevate your music with unparalleled
            precision. Our audio production, mixing, and mastering services
            ensure every note reaches its full potential. From inception to the
            final master, we meticulously refine each track, guaranteeing
            pristine quality and captivating depth.
          </p>
        </div>
        <div className="relative flex md:justify-center items-center justify-end">
          <Image
            src="/images/audio.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-l-full md:w-full md:h-[400px] h-[250px] w-[280px] object-cover"
          />
          <div className="absolute  md:-left-20 left-[1rem]">
            <Image
              src="/images/academy.png"
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

      {/* section two */}
      <div className="grid grid-cols-fluid relative py-10">
        <div className="relative flex md:justify-center items-center justify-start">
          <Image
            src="/images/piano.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-r-full md:w-full md:h-[400px] h-[250px] w-[280px] bg-cover bg-center"
          />
          <div className="absolute  md:-right-20 right-[1rem]">
            <Image
              src="/images/academy.png"
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
        <div className="max-w-[400px] justify-self-end">
          <p className="text-[#E6CA30]">
            {" "}
            <span className="text-[#E6CA30]">—</span> Engage: Memorable Auditory
            Identities
          </p>
          <h3 className="text-2xl font-bold text-[#AD8987]">Piano Lessons</h3>
          <p className="leading-7 text-slate-600">
            Beatskills Academy, offers distinctive radio jingles and expert
            voice-over services. Our customized audio identities enhance brand
            recognition, ensuring your message resonates powerfully in
            advertisements, podcasts, and branding efforts.
          </p>
        </div>
      </div>

      {/* section one */}
      <div className="grid grid-cols-fluid relative">
        <div className="max-w-[400px]">
          <p className="text-[#AFE630]">
            {" "}
            <span className="text-[#AFE630]">—</span> Record: Craft Sonic
            Brilliance
          </p>
          <h3 className="text-2xl font-bold text-[#AD8987]">Guitar</h3>
          <p className=" text-slate-600 leading-7">
            At Beatskills Academy, we elevate your music with unparalleled
            precision. Our audio production, mixing, and mastering services
            ensure every note reaches its full potential. From inception to the
            final master, we meticulously refine each track, guaranteeing
            pristine quality and captivating depth.
          </p>
        </div>
        <div className="relative flex md:justify-center items-center justify-end">
          <Image
            src="/images/guita.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-l-full md:w-full md:h-[400px] h-[250px] w-[280px] object-cover"
          />
          <div className="absolute  md:-left-20 left-[1rem]">
            <Image
              src="/images/academy.png"
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
  );
}

export default OverView;
