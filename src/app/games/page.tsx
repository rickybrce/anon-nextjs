"use client"; // This is a client component
import Image from "next/image";
import LeftMenu from "../components/LeftMenu";
import LeftAvatarSection from "../components/LeftAvatarSection";
import TopNavigation from "../components/TopNavigation";
import { useState } from "react";
import GamesTabMenu from "../components/GamesTabMenu";


export default function Games() {



  return (
    <main className="">
      <div className="px-[16px] py-[16px] pt-14 lg:px-[27px] lg:py-[16px] lg:pt-14 xl:pt-[16px] lg:flex">
        <LeftMenu activeItem={1} />
        <LeftAvatarSection />
        <div className="grow overflow-hidden mt-4 lg:mt-0">
          <TopNavigation />

          <div className="">
            <div className="">
              <div className=" mb-[20px] lg:mb-[57px]">
                <GamesTabMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
