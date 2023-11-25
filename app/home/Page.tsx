import Hero from "@/components/hero/Hero";
import Player from "@/components/player/Player";
import Team from "@/components/team/Team";
import Testimonial from "@/components/testmon/Testimonial";
import Why from "@/components/why/Why";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <Why />
      <Player />
      <Testimonial />
      <Team />
    </>
  );
}

export default Page;
