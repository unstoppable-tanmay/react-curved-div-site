"use client";

import { BentRectangle } from "react-curved-div";
import useMediaQuery from "@/hooks/use-media-query";

/* eslint-disable @next/next/no-img-element */
export const CyberSecurityCard = () => {
  const [md] = useMediaQuery("(min-width: 768px)");
  return (
    <div className="relative w-[clamp(200px,400px,500px)] h-[clamp(150px,250px,350px)] mx-3 aspect-video rounded-2xl overflow-hidden shadow-xl group">
      {/* Background Image - what we want to blur through */}
      <div className="absolute inset-0 group-hover:scale-[1.01] transition-transform duration-500">
        <img
          src="https://i.pinimg.com/736x/95/29/6e/95296ebc51c3e09446262e18db8ef8e5.jpg"
          alt="Cyber security background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Character avatar */}
      <div className="absolute top-[22%] w-full flex justify-center">
        <div className="w-14 h-14 z-10 rounded-full border-2 border-white/20 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Character avatar"
            className="object-cover w-full h-full z-20 scale-105 group-hover:scale-100 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Bottom bent card with glass effect */}
      <div className="absolute bottom-0 w-full h-[75%]">
        <BentRectangle
          topLeftCornerRadius={md ? 40 : 30}
          topRightCornerRadius={md ? 40 : 30}
          bottomLeftCornerRadius={12}
          bottomRightCornerRadius={12}
          topBendPercent={md ? 25 : 18}
          isFullWidthOfParent
          className="h-full"
          contentClassName="no-scrollbar bg-purple-200/20 backdrop-blur-md"
        >
          <div className="p-4 pt-8 w-full h-full flex flex-col justify-end">
            <h2 className="text-white font-semibold text-lg">Cyber Security</h2>
            <p className="text-gray-300 text-sm line-clamp-2">
              Building the next generation of cyber experts through education
              and hands-on training. Our university-bas...
            </p>
            <div className="flex justify-between mt-3 text-gray-300 text-xs">
              <span className="flex items-center relative">
                <span className=" w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                <span className="absolute w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-ping"></span>
                <span className="-mt-[0.5px]">5,678 Active</span>
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-sm mr-1.5 animate-spin"></span>
                <span className="-mt-[0.5px]">345,678 Enrolled</span>
              </span>
            </div>
          </div>
        </BentRectangle>
      </div>
    </div>
  );
};
