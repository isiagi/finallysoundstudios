import { FaHandsHelping } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";

function Why() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-fluid px-5">
        <div>
          <p className="text-3xl font-medium text-[#8AED97]">Why choose us</p>
          <h3 className="text-xl py-2 font-medium text-[#ED837E]">
            Elevate Your Sound with Nexus Beats
          </h3>
          <p className="max-w-[500px] leading-7 text-slate-600">
            Welcome to Nexus Beats, where we don&apos;t just create music; we
            sculpt experiences. Our commitment lies in crafting sonic landscapes
            that resonate with depth, clarity, and emotion. As you explore our
            services, discover why Nexus Beats stands as a beacon for audio
            excellence.
          </p>

          <button type="button" className="bg-[#ED837E] text-white p-2 rounded">
            Book Session
          </button>
        </div>
        <div className="grid grid-cols-fluid gap-2">
          <div className="border-[1px] border-[#8AED97] p-4 flex justify-center flex-col items-center">
            <GrUserExpert className="text-[#ED837E] text-3xl my-2" />
            <h3 className="text-xl font-medium pb-2 text-[#AD8987]">
              Precision and Expertise
            </h3>
            <p className="leading-7 text-slate-600">
              Our seasoned team of audio engineers and producers brings years of
              expertise to every project. With an unwavering commitment to
              precision, we ensure your music reaches its fullest potential,
              crafted meticulously to stand out in today&apos;s competitive
              landscape.
            </p>
          </div>
          <div className="border-[1px] border-[#8AED97] p-4 flex justify-center flex-col items-center">
            <GrTechnology className="text-[#ED837E] text-3xl my-2" />
            <h3 className="text-xl font-medium pb-2 text-[#AD8987]">
              Cutting-Edge Technology
            </h3>
            <p className="leading-7 text-slate-600">
              Nexus Beats houses state-of-the-art studios equipped with
              cutting-edge technology. From recording to mastering, we leverage
              the latest tools and techniques, ensuring a seamless production
              process and impeccable quality in every track.
            </p>
          </div>
          <div className="border-[1px] border-[#8AED97] p-4 flex justify-center flex-col items-center">
            <GiSelfLove className="text-[#ED837E] text-3xl my-2" />
            <h3 className="text-xl font-medium pb-2 text-[#AD8987]">
              Passion for Innovation
            </h3>
            <p className="leading-7 text-slate-600">
              Our passion for innovation drives us to constantly explore new
              horizons in sound. We thrive on pushing boundaries, embracing new
              trends, and staying ahead of the curve in the ever-evolving realm
              of music production.
            </p>
          </div>
          <div className="border-[1px] border-[#8AED97] p-4 flex justify-center flex-col items-center">
            <FaHandsHelping className="text-[#ED837E] text-3xl my-2" />
            <h3 className="text-xl font-medium pb-2 text-[#AD8987]">
              Collaborative Approach
            </h3>
            <p className="leading-7 text-slate-600">
              Collaborating with Nexus Beats means becoming part of a creative
              journey. We value collaboration and work closely with our clients,
              ensuring your vision is translated into a sonic masterpiece that
              exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
