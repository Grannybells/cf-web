import Link from "next/link";
import React from "react";
import { shortCutLinks } from "@/contexts/constant";
import { TiStarFullOutline } from "react-icons/ti";

export default function ShortCut() {
  return (
    <div className="hidden lg:flex flex-col w-full h-auto bg-white rounded-md overflow-hidden shadow-lg">
      <div className="flex flex-row gap-2 w-full h-auto items-center justify-start px-3 py-2 bg-[#5BBF21] uppercase font-semibold text-sm text-white">
        <TiStarFullOutline />
        Quick links
      </div>
      <div className="min-h-36 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5 p-5">
        {shortCutLinks.map((shortCutLinks) => (
          <Link
            href={shortCutLinks.link}
            key={shortCutLinks.id}
            className="group flex flex-col items-center justify-center py-3 h-28 lg:h-auto text-center rounded-md shadow-md border-[1px] border-[#5BBF21]/50 hover:bg-[#5BBF21] hover:font-semibold hover:text-white hover:border-[3px] hover:border-green-600"
          >
            <div className="text-blue-500 group-hover:text-white">
              {shortCutLinks.icon}
            </div>
            <div className="lg:text-sm xl:text-base group-hover:text-white">
              {shortCutLinks.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
