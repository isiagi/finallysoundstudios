import Link from "next/link";
import React from "react";

function HomeServices() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h2 className="text-slate-600">What I do</h2>
        <h2 className="text-3xl font-semibold text-[#8AED97]">
          Studio Services
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#ED837E] flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-600 text-lg title-font font-medium mb-2">
                Audio Production, Mixing & Mastering
              </h2>
              <p className="leading-relaxed text-base">
                Refine your music with Nexus Beats. From creation to the final
                mix, our precision ensures your tracks resonate with clarity and
                depth.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-600 text-lg title-font font-medium mb-2">
                Radio Jiggles / Voice Overs
              </h2>
              <p className="leading-relaxed text-base">
                Stand out with Nexus Beats. Our tailored jingles and
                professional voice-overs captivate and resonate across all
                platforms.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#ED837E] flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#ED837E] flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-600 text-lg title-font font-medium mb-2">
                Vocal Training
              </h2>
              <p className="leading-relaxed text-base">
                Discover your voice with Nexus Beats. Our tailored training
                enhances range, control, and expression.
              </p>
            </div>
          </div>
          <Link href={"/Services"}>
            <button className="flex mx-auto mt-20 text-white bg-[#ED837E] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              View More Services
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomeServices;
