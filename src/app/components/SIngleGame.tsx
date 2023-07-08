"use client"; // This is a client component
import React, { ReactNode } from "react";
import Image from "next/image";
import content from "../../../public/static/locales/en/common.json";
import ButtonAdd from "./buttons/ButtonAdd";
import Link from "next/link";
import ButtonPlay from "./buttons/ButtonPlay";

type Props = {
  title?: string;
  description?: string;
  url?: string;
  remaining?: string;
  limittype?: string;
  active?: boolean;
  image?: string;
};

const SingleGame = ({
  title,
  description,
  url,
  remaining,
  limittype,
  active,
  image,
}: Props) => {
  return (
    <div className="relative h-[196px] flex flex-wrap items-stretch rounded-[10px] overflow-hidden">
      {image && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={image}
            alt={title ? title : ""}
            width={300}
            height={196}
            className="w-full object-cover"
          />
        </div>
      )}
      <div className="w-full relative text-white text-right uppercase font-w-700 text-[20px] leading-[28px] py-[17px] px-[15px]">
        {title}
      </div>
      <div className="w-full relative rounded-[10px] flex flex-wrap items-end">
        <div className="w-full relative pt-3 pb-[14px] pl-[22px] pr-3 rounded-[10px] bg-blue-950 flex items-end justify-between">
          <div className="">
            <div className="mb-[13px] text-[14px] leading-[20px] font-w-500 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-purple-100">
              {description?.substring(0, 20) + "..."}
            </div>
            <div className="text-[12px] leading-[12px] font-w-500 text-green-200 relative pl-[20px]">
              <Image
                src="/images/ic-time.svg"
                alt={""}
                width={47}
                height={51}
                className="
                                    w-full
                                    max-w-[40px]
                                    absolute left-[-12px] top-[0px]
                                    "
              />
              {remaining} {content.general.remaining}
              <br />
              <span className="uppercase">{limittype}</span>
            </div>
          </div>
          <div className="pl-[20px]">
            <Link href={url ? url : ""}>
              <ButtonPlay className="ml-auto">
                {content.general.play_cta}
              </ButtonPlay>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
