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

const GamesTabSingleItem = ({ title, active, onClick, first }: Props) => {
  return (
    <button
      onClick={() => {
        onClick ? onClick() : null;
      }}
      className={`block lg:inline-block text-center relative px-[23px] text-base font-w-400
      ${active ? "text-green-800" : "text-white"}
      ${!first ? "lg:border-l-[2px] border-blue-500" : ""}
        `}
    >
      {title}
    </button>
  );
};

export default GamesTabSingleItem;
