import Hero from "@/components/hero/Hero";
import HomeServices from "@/components/homeServices/HomeServices";
import Player from "@/components/player/Player";
import Team from "@/components/team/Team";
import Testimonial from "@/components/testmon/Testimonial";
import Why from "@/components/why/Why";
import React from "react";

function Page() {
  return (
    <>
      <Hero />
      <HomeServices />
      <Why />
      <Player />
      <Testimonial />
      <Team />
    </>
  );
}

export default Page;
