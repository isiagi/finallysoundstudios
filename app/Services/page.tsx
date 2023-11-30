import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div>
      <HeaderBanner name="Services" />
      <div className="px-5 flex flex-col gap-16 py-20">
        {/* section one */}
        <div className="grid grid-cols-fluid relative">
          <div className="max-w-[400px]">
            <p className="text-[#AFE630]">
              {" "}
              <span className="text-[#AFE630]">—</span> Record: Craft Sonic
              Brilliance
            </p>
            <h3 className="text-2xl font-bold text-gray-600">
              Audio Production, Mixing & Mastering
            </h3>
            <p className=" text-slate-600 leading-7">
              At Nexus Beats, we elevate your music with unparalleled precision.
              Our audio production, mixing, and mastering services ensure every
              note reaches its full potential. From inception to the final
              master, we meticulously refine each track, guaranteeing pristine
              quality and captivating depth.
            </p>
          </div>
          <div className="relative flex md:justify-center items-center justify-end">
            <Image
              src="/images/nexus1.jpeg"
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
        {/* section two */}
        <div className="grid grid-cols-fluid relative">
          <div className="relative flex md:justify-center items-center justify-start">
            <Image
              src="https://images.unsplash.com/photo-1598743400863-0201c7e1445b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFkaW8lMjBKaW5nbGVzJTIwJTJGJTIwVm9pY2UlMjBPdmVyc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-r-full md:w-full md:h-[400px] h-[250px] w-[280px] bg-cover bg-center"
            />
            <div className="absolute  md:-right-20 right-[1rem]">
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
          <div className="max-w-[400px] justify-self-end">
            <p className="text-[#E6CA30]">
              {" "}
              <span className="text-[#E6CA30]">—</span> Engage: Memorable
              Auditory Identities
            </p>
            <h3 className="text-2xl font-bold text-gray-600">
              Radio Jingles / Voice Overs
            </h3>
            <p className="leading-7 text-slate-600">
              Nexus Beats offers distinctive radio jingles and expert voice-over
              services. Our customized audio identities enhance brand
              recognition, ensuring your message resonates powerfully in
              advertisements, podcasts, and branding efforts.
            </p>
          </div>
        </div>
        {/* section three */}
        <div className="grid grid-cols-fluid relative">
          <div className="max-w-[400px]">
            <p className="text-[#E6B430]">
              {" "}
              <span className="text-[#E6B430]">—</span> Amplify: Power Your
              Brand Message
            </p>
            <h3 className="text-2xl font-bold text-gray-600">Adverts</h3>
            <p className="leading-7 text-gray-600">
              Nexus Beats specializes in crafting dynamic and impactful audio
              adverts. We amplify your brand&apos;s voice, delivering compelling
              messages that cut through the clutter, ensuring your brand
              resonates strongly across various platforms.
            </p>
          </div>
          <div className="relative flex md:justify-center items-center justify-end">
            <Image
              src="https://media.istockphoto.com/id/1440203158/photo/neon-megaphone-with-lightning-bolts.jpg?s=1024x1024&w=is&k=20&c=1WYGHWUzWRHWdV2LTGKHB5loUi4OyAg6Qg04VnCMPEk="
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
        {/* section four */}
        <div className="grid grid-cols-fluid relative">
          <div className="relative flex md:justify-center items-center justify-start">
            <Image
              src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBWb2NhbCUyMFRyYWluaW5nfGVufDB8fDB8fHww"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-r-full md:w-full md:h-[400px] h-[250px] w-[280px] bg-cover bg-center"
            />
            <div className="absolute  md:-right-20 right-[1rem]">
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
          <div className="max-w-[400px] justify-self-end">
            <p className="text-[#57E620]">
              {" "}
              <span className="text-[#57E620]">—</span> Empower: Unlock Vocal
              Potential
            </p>
            <h3 className="text-2xl font-bold text-gray-600">Vocal Training</h3>
            <p className="text-slate-600 leading-7">
              Nexus Beats empowers artists through personalized vocal training.
              Whether you&apos;re a beginner or seeking to refine your skills,
              our instructors guide you through techniques to unlock your full
              vocal potential, enhancing range, control, and expression.
            </p>
          </div>
        </div>
        {/* section five */}
        <div className="grid grid-cols-fluid relative">
          <div className="max-w-[400px]">
            <p className="text-[#E5E02F]">
              {" "}
              <span className="text-[#E5E02F]">—</span> Inspire: Ignite Creative
              Mastery
            </p>
            <h3 className="text-2xl font-bold text-gray-600">
              Music Production Training
            </h3>
            <p className="text-slate-600 leading-7">
              Nexus Beats offers comprehensive music production training to
              ignite your creative journey. Delve into music composition,
              production techniques, and cutting-edge tools under expert
              guidance, shaping your unique musical identity and unlocking your
              full potential.
            </p>
          </div>
          <div className="relative flex md:justify-center items-center justify-end">
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE11c2ljJTIwUHJvZHVjdGlvbiUyMFRyYWluaW5nfGVufDB8fDB8fHww"
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
