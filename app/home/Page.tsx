"use client";

import Hero from "@/components/hero/Hero";
import HomeServices from "@/components/homeServices/HomeServices";
import Player from "@/components/player/Player";
import Team from "@/components/team/Team";
import Testimonial from "@/components/testmon/Testimonial";
import Why from "@/components/why/Why";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <HomeServices />
          <Why />
          <Player />
          <Testimonial />
          <Team />
        </>
      )}
    </>
  );
}

export default Page;
