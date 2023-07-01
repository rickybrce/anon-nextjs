"use client"; // This is a client component
import React, { ReactNode, useState } from "react";
import LeftMenuSIngleItem from "./LeftMenuSIngleItem";
import Image from "next/image";
import GamesTabSingleItem from "./GamesTabSingleItem";

const gamesMenu = [
  {
    title: "Active games",
  },
  {
    title: "Past games",
  },
  {
    title: "My Active games",
  },
  {
    title: "My Past games",
  },
];

type Props = {
  title?: any;
};

const GamesTabMenu = ({ title }: Props) => {
    const [activeItem, seActiveItem] = useState(0);
  const handleActiveItem = (e: any) => {
    seActiveItem(e);
    };

  return (
    <div className="text-center">
      <div
        className={`w-auto inline-block gradient-border-menu relative mt-[27px] transition-all duration-500 bg-blue-600 border-green-100 mx-auto rounded-[16px] px-0 py-[9px] relative`}
      >
        <div className="bg-blue-100 absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[16px] top-[2px] left-[2px]"></div>
        <div className="text-center">
          {gamesMenu &&
            gamesMenu.map((item: any, index: number) => (
                  <GamesTabSingleItem
                    title={item.title}
                    onClick={() => handleActiveItem(index)}
                    first={index === 0 ? true : false}
                    active={activeItem === index}
                  />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GamesTabMenu;
