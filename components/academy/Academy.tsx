import Image from "next/image";
import React from "react";

function Academy() {
  return (
    <div>
      <div className="grid grid-cols-fluid gap-5 px-5 pt-5">
        <div>
          <Image
            src={"/images/nexus.jpg"}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-medium text-[#AD8987] mb-5">
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
            className="bg-[#EC8AA4] text-white mt-3 p-3 rounded"
          >
            Enroll Now
          </button>
        </div>
      </div>
      <div className="px-5">
        <h1>Courses</h1>
      </div>
    </div>
  );
}

export default Academy;
