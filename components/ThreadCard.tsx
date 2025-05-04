import Image from "next/image";
import React from "react";
import profile from "../public/profile.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { IoEye } from "react-icons/io5";
function ThreadCard() {
  return (
    <div className="w-full  p-5  space-y-5 rounded-md">
      <div className=" bg-[#2e0926] p-5 space-y-5">
        <h1 className="text-2xl font-bold">
          Whate is react js ? How does it work?
        </h1>
        <div className=" flex items-center space-x-4">
          <button
            className={`
             py-2 px-3 w-[100px] rounded-md cursor-pointer font-semibold
           bg-[#081338]
            `}
          >
            React
          </button>
          <button
            className={`
             py-2 px-3 w-[100px] rounded-md cursor-pointer font-semibold
           bg-[#081338]
            `}
          >
            Vue
          </button>
        </div>
        <div className=" text-sm text-gray-300">
          <div className=" flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src={profile}
                width={40}
                height={40}
                className="aspect-square rounded-full object-cover"
                alt="logo"
              />
              <h1>Kaung Min Khant</h1>
              <span>asked 2 minutes ago</span>
            </div>
            <div className=" flex items-center space-x-4">
              <div className=" flex items-center space-x-1">
                <span>
                  <AiOutlineLike />
                </span>
                <span>10</span>

                <span>Like</span>
              </div>

              <div className=" flex items-center space-x-1">
                <span>
                  <MdOutlineMessage />
                </span>
                <span>1</span>

                <span>Answers</span>
              </div>

              <div className=" flex items-center space-x-1">
                <span>
                  <IoEye />
                </span>
                <span>1.2</span>
                <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
