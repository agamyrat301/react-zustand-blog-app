import React, { useState } from "react";
interface FollowsProps {
  title: string;
}

const Follows: React.FC<FollowsProps> = ({ title }) => {
  const happenings = [
    {
      name: "Coding",
      handle: "@joebiden",
      image: "https://picsum.photos/200/200",
    },
    {
      name: "Coding",
      handle: "@joebiden",
      image: "https://picsum.photos/200/200",
    },
    {
      name: "Coding",
      handle: "@joebiden",
      image: "https://picsum.photos/200/200",
    },
    {
      name: "Coding",
      handle: "@joebiden",
      image: "https://picsum.photos/200/200",
    },
  ];

  return (
    <div className="m-2 border  border-white-200 rounded-2xl overflow-hidden">
      <h1 className="p-3 text-xl font-extrabold text-gray-900 border-b">
        {title}
      </h1>

      {happenings.map((item) => {
        return (
          <div className="flex flex-row justify-between border-b items-center p-2">

            <div className="flex flex-row">
              <img
                src={item.image}
                className="w-10 h-10 rounded-full"
                alt={item.name}
              />

              <div className="flex flex-col ml-2">
                <h1 className="text-sm font-bold text-gray-900">{item.name}</h1>
                <p className="text-xs text-gray-500">{item.handle}</p>

              </div>


            </div>


            <div className="flex  h-full">
                <button className="px-4 py-2 font-bold text-xs text-white bg-black hover:bg-blue-600 transition rounded-full">
                    Follow
                </button>
            </div>




          </div>
        );
      })}

      <div className="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 transition">
        Show More...
      </div>
    </div>
  );
};

export default Follows;
