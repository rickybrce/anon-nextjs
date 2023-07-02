"use client"; // This is a client component
import React, { ReactNode } from "react";
import content from "../../../public/static/locales/en/common.json";
import Image from "next/image";
import ButtonMenu from "./buttons/ButtonMenu";
import Link from "next/link";
import ButtonPlaceBet from "./buttons/ButtonPlaceBet";

type Props = {};

const TopNavigationSecond = ({}: Props) => {
  return (
    <div className="w-full py-[20px] md:flex items-center justify-between">
      <div className="flex items-center mb-4 lg:mb-0">
        <Image
          src={"/images/ic-music.svg"}
          alt={""}
          width={50}
          height={55}
          className="
                    w-full
                    h-auto
                    max-w-[50px]
                    "
        />
        <div className="relative menu-button-bg ml-4 font-w-600 text-[14px] 2xl:text-[18px] leading-[26px] py-[4px] lg:py-[7px] px-[25px] rounded-[16px]">
          <div className="absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] border-menu-bg z-0 rounded-[16px]"></div>
          <span className="relative block">18h : 17m : 29s</span>
          <span className="relative block text-[12px] leading-[14px]">
            Time Remaining
          </span>
        </div>
        <div className="h-[56px] flex items-center relative menu-button-bg ml-4 font-w-600 text-[14px] 2xl:text-[18px] leading-[26px] py-[4px] lg:py-[7px] px-[11px] rounded-[16px]">
          <div className="absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] border-menu-bg z-0 rounded-[16px]"></div>
          <svg
            className="relative"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 10.02L8.0329 16.9937V12.9805L3 10.02Z" fill="#F8FCFF" />
            <path
              d="M8.0332 17.0595L13.0003 10.02L8.0332 13.0134V17.0595Z"
              fill="#A5D7FD"
            />
            <path d="M8 7.94092V11.9409L11 9.6734L8 7.94092Z" fill="#4EB2FF" />
            <path d="M8 0.940918V6.86197L3 9.1646L8 0.940918Z" fill="#F8FCFF" />
            <path
              d="M13 9.09881L8 6.86197V0.940918L13 9.09881Z"
              fill="#A5D7FD"
            />
            <path
              d="M5 9.72436L8 11.9409L7.98039 7.94092L5 9.72436Z"
              fill="#9DD4FF"
            />
          </svg>
          <span className="relative block ml-1">50,25 ETH - Prize pool</span>
        </div>
      </div>

      <div>
        <Link href="#" className="ml-1 3xl:ml-[16px]">
          <ButtonMenu>Burn NFT</ButtonMenu>
        </Link>
        <Link href="#" className="ml-[10px]">
          <ButtonMenu>Buy KIN</ButtonMenu>
        </Link>
        <Link href="#" className="ml-[47px]">
        <ButtonPlaceBet>Connect wallet</ButtonPlaceBet>
      </Link>
      </div>

      
    </div>
  );
};

export default TopNavigationSecond;
