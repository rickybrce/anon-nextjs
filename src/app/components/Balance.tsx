"use client"; // This is a client component
import React, { ReactNode } from "react";
import Image from "next/image";
import content from "../../../public/static/locales/en/common.json";
import ButtonAdd from "./buttons/ButtonAdd";
import Link from "next/link";

type Props = {
  title?: string;
  ctaLabel?: string;
  ctaLink?: string;
  type?: string;
  value?: string;
  size?: string; // "small" | "default"
};

const Balance = ({ type, title, value, ctaLabel, ctaLink, size }: Props) => {
  return (
    <div className={`${size === "small" ? "mt-3" : "mt-6"} w-full px-6`}>
      {title && (
        <div className="font-w-700 text-[20px] leading-[28px] mb-[9px]">
          {content.general.dollarino_balance}
        </div>
      )}
      <div className={`${size === "small" ? "px-4 py-2" : "p-4"} border-[2px] border-blue-800 rounded-[16px] flex justify-between items-center`}>
        <div className="flex items-center">
          {type === "eth" && (
            <Image
              src="/images/ic-ethereum.svg"
              alt="eth"
              width={size === "small" ? 20 : 32}
              height={size === "small" ? 20 : 32}
              className="mr-[12px]"
            />
          )}
          <div className={`${size === "small" ? "pl-3" : ""} font-w-700 text-[20px] leading-[28px]`}>{value}</div>
        </div>
        <div>
          <Link href={ctaLink ? ctaLink : ""}>
            <ButtonAdd>{ctaLabel}</ButtonAdd>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Balance;
