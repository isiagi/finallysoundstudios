import Image from "next/image";
import React from "react";

function Academy() {
  return (
    <div>
      <div className="grid grid-cols-fluid gap-5 px-5 pt-16">
        <div>
          <Image
            src="/images/nexus.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-r-full md:w-full md:h-[400px] h-[250px] w-[280px] bg-cover bg-center"
          />
        </div>
        <div>
          <h1 className="text-4xl font-medium text-[#8AED97] mb-5">
            BEATSKILLS ACADEMY
          </h1>
          <p className="leading-7 text-slate-600 mb-3">
            Welcome to Beatskills Academy, where passion meets proficiency in
            the world of music. Established with the vision of nurturing musical
            talent and fostering a deep appreciation for various genres,
            Beatskills is your gateway to unlocking the musician within.
          </p>

          <p className="leading-7 text-slate-600">
            At Beatskills Academy, we believe that music is a universal language
            that transcends boundaries. Our team comprises seasoned musicians,
            composers, and educators dedicated to cultivating the next
            generation of musical maestros. We offer a diverse range of programs
            tailored to suit beginners, intermediate learners, and aspiring
            professionals.
          </p>
          <button
            type="button"
            className="bg-[#EC8AA4] text-white mt-7 p-3 rounded"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Academy;
