"use client";

import { BentRectangle } from "react-curved-div";
import React from "react";

const ScreenBraker = () => {
  return (
    <div className="w-full h-[100%]">
      <BentRectangle
        bottomBendPercent={20}
        bendDirection="outward"
        className="w-screen h-screen"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        contentClassName="bg-gradient-to-b from-teal-500 to-teal-700 no-scrollbar"
        contentStyle={{
          background: "linear-gradient(to bottom, #4FD1C5, #38B2AC)",
        }}
      >
        <div className="content relative w-full h-full text-white flex items-center justify-center">
          <div className="text flex flex-col justify-center">
            <div className="flex ml-2">
              <div className="text-[4.7rem] font-sans font-semibold">SOME</div>
              <div className="text-[1.3rem] rotate-90 translate-x-[-50px] leading-2.5 mt-3">
                Pages
              </div>
            </div>
            <div className="text-9xl font-sans font-semibold w-[300px] -mt-8">
              Ends
            </div>
            <div className="text-2xl font-sans font-semibold ml-[0%] self-end mr-8">
              Like This
            </div>
          </div>
        </div>
      </BentRectangle>
    </div>
  );
};

export default ScreenBraker;
