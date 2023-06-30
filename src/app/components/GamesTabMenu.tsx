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
    const [activeItem, seActiveItem] = useState(false);
  const handleActiveItem = () => {
    seActiveItem(!activeItem);
    };

  return (
    <div>
      <div
        className={`transition-all duration-500 bg-blue-600 border-[3px] border-green-100 w-full`}
      >
        <div className="w-full">
          {gamesMenu &&
            gamesMenu.map((item: any, index: number) => (
              <div key={index} className="relative">
                <>
                  <GamesTabSingleItem
                    title={item.title}
                    onClick={() => handleActiveItem()}
                  />
                </>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GamesTabMenu;
