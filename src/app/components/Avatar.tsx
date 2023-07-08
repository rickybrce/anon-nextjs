"use client"; // This is a client component
import React, { ReactNode } from "react";
import Image from "next/image";
import Tooltip from "./Tooltip";

type Props = {
  name?: string;
  nickname?: string;
  image?: string;
  tooltipText?: string;
  tooltipTextTwo?: string;
};

const Avatar = ({ name, nickname, image, tooltipText, tooltipTextTwo }: Props) => {
  return (
    <div className="w-full text-center">
      <div className="relative bg-gradient-to-b from-blue-400 to-blue-500 mx-auto mt-[34px] w-[159px] h-[159px] rounded-full flex items-center justify-center">
        <div className="absolute left-[2px] top-[2px] w-[155px] h-[155px] rounded-full bg-blue-600"></div>
        <div className="absolute left-[-6px] top-[10px]">
          <Tooltip text={tooltipText} />
        </div>

        {image && (
          <div className="relative">
            <Image
              src={image}
              alt={""}
              width={138}
              height={138}
              className="
                    w-full
                    h-auto
                    max-w-[138px]
                    mx-auto
                    relative
                    rounded-full
                    "
            />
          </div>
        )}
      </div>
      <div className="mt-[18px] font-w-600 text-[24px] leading-[32px]">
        {name}
      </div>
      <div className="relative font-w-600 text-[12px] leading-[32px] inline-block">
        {nickname}
        <div className="absolute right-[-16px] top-[3px] flex">
            <Tooltip text={tooltipTextTwo} size="small" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
