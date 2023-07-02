"use client"; // This is a client component
import React, { ReactNode } from "react";
import content from "../../../public/static/locales/en/common.json";

type Props = {
  pages?: any;
  classList?: string;
  onClick?: () => void;
};

const Pagination = ({ pages, classList, onClick }: Props) => {
  return (
    <div
      className={`font-w-700 text-[20px] leading-[28px] text-white text-center mt-10 ${
        classList ? classList : ""
      }`}
    >
      {pages && pages.length > 3 ? (
        <>
          {pages.slice(0, 3).map((item: any, index: number) => (
            <button onClick={()=> onClick ? onClick() : ""} key={index} className="cursor-pointer mx-[25px]">
              {item}
            </button>
          ))}
          ...
        </>
      ) : (
        pages.map((item: any, index: number) => (
          <button onClick={()=> onClick ? onClick() : ""} key={index} className="cursor-pointer mx-[25px]">
            {item}
          </button>
        ))
      )}
      {pages.length > 3 && (
        <button onClick={()=> onClick ? onClick() : ""} className="cursor-pointer mx-[25px]">
          {pages[pages.length - 1]}
        </button>
      )}
    </div>
  );
};

export default Pagination;
