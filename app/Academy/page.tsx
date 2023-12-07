import Academy from "@/components/academy/Academy";
import Accord from "@/components/accord/Accord";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import OverView from "@/components/overView/OverView";
import React from "react";

function page() {
  return (
    <div>
      <HeaderBanner name="BeatSkills Academy" />
      <Academy />
      <Accord />
      <OverView />
    </div>
  );
}

export default page;
