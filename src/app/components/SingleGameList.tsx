"use client"; // This is a client component
import React, { ReactNode, useState } from "react";

type Props = {
  title?: any;
  className?: string;
}; 

const SingleGameList = ({ title, className }: Props) => {

  return (
        <div className= {`${className ? className : ""}`} >
          {title}
        </div>
  );
};

export default SingleGameList;
