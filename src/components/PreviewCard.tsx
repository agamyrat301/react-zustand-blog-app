import React, { useState } from "react";
interface PreviewCardProps {
  title: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ title }) => {
  const happenings = [
    {
      title: "Coding",
      count: "8.8k Tweets",
    },
    {
      title: "Spacex",
      count: "18.8k Tweets",
    },
    {
      title: "Sex Life",
      count: "10k Tweets",
    },
    {
      title: "Sex Life",
      count: "10k Tweets",
    },
  ];

  return (
    <div className="m-2 border  border-white-200 rounded-2xl overflow-hidden">
      <h1 className="p-3 text-xl font-extrabold text-gray-900 border-b">
        {title}
      </h1>
      {happenings.map((item) => {
        return (
          <div className="p-3 hover:bg-gray-100 cursor-pointer border-b transition">
            <div>
              <h2 className="font-bold text-gray-800 text-md">{item.title}</h2>
              <p className="text-xs text-gray-400">{item.count}</p>
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

export default PreviewCard;
