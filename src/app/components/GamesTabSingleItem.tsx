"use client"; // This is a client component
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title?: string;
  active?: boolean;
  onClick?: any;
  first?: boolean;
};

const GamesTabSingleItem = ({
  title,
  active,
  onClick,
  first
}: Props) => {

  return (
    <button
      onClick={() => {
        onClick ? onClick() : null;
      }}
      className={`inline-block text-center relative px-[23px] text-base font-400
      ${active ? "text-green-800" : "text-white"}
      ${!first ? "border-l-[2px] border-blue-500" : ""}
        `}
    >
        {title}
    </button>
  );
};

export default GamesTabSingleItem;
