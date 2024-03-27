import Link from "next/link";
import React from "react";
import { shortCutLinks } from "@/contexts/constant";
import { TiStarFullOutline } from "react-icons/ti";

export default function ShortCut() {
  return (
    <div className="hidden lg:flex flex-col w-full h-auto bg-white rounded-sm overflow-hidden shadow-lg">
      <div className="flex flex-row gap-2 w-full h-auto items-center justify-start px-3 py-2 bg-[#5BBF21] uppercase font-semibold text-sm">
        <TiStarFullOutline />
        Quick links
      </div>
      <div className="min-h-36 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5 p-5">
        {shortCutLinks.map((shortCutLinks) => (
          <Link
            href={shortCutLinks.link}
            key={shortCutLinks.id}
            className="flex flex-col items-center justify-center py-3 h-28 lg:h-auto text-center rounded-md shadow-md border-[1px] border-black hover:bg-[#5BBF21] hover:text-white hover:border-[3px] hover:border-green-600"
          >
            {shortCutLinks.icon}
            {shortCutLinks.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
