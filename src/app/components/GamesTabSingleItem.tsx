"use client"; // This is a client component
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title?: string;
  active?: boolean;
  onClick?: any;
};

const GamesTabSingleItem = ({
  title,
  active,
  onClick
}: Props) => {
  const [activeItem, seActiveItem] = useState(false);

  const handleActiveItem = () => {
    seActiveItem(!activeItem);
    };

  return (
    <button
      onMouseLeave={() => {
        handleActiveItem();
      }}
      className={`block text-green-200  text-center rounded-[6px] mb-[30px] py-[6px] relative
        `}
    >
      <span className="text-[13px] leading-[20px] font-w-700 text-center block relative">
        {title}
      </span>
    </button>
  );
};

export default GamesTabSingleItem;
