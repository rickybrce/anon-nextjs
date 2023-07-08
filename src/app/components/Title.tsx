"use client"; // This is a client component
import React, { ReactNode } from "react";
import content from "../../../public/static/locales/en/common.json";
import ButtonSeeAll from "./buttons/ButtonSeeAll";
import SingleStatistic from "./SIngleStatistic";
import Tooltip from "./Tooltip";

type Props = {
  title?: string;
  classList?: string;
  tooltipText?: string;
};

const Title = ({ title, classList, tooltipText }: Props) => {
  return (
    <div
      className={` ${
        tooltipText ? "flex" : ""
      } font-w-700 text-[32px] leading-[40px] text-gray-100 ${
        classList ? classList : ""
      }`}
    >
      <div
        className="inline-block"
        dangerouslySetInnerHTML={{ __html: title ? title : "" }}
      ></div>
      {tooltipText && (
        <div className="flex h-[30px] items-start ml-1">
          <Tooltip text={tooltipText} size="small" />
        </div>
      )}
    </div>
  );
};

export default Title;
