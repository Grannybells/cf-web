import Link from "next/link";
import React from "react";
import { employeeForms } from "@/contexts/constant";

export default function FormGroup() {
  return (
    <div className="w-full h-full font-poppins tracking-wide">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
        {employeeForms.map((employeeForms) => (
          <Link
            key={employeeForms.id}
            href={employeeForms.link}
            className="flex flex-col items-center justify-center text-center h-40 p-3 rounded-md bg-white shadow-lg hover:bg-[#5BBF21] hover:text-white hover:border-[3px] hover:border-green-600"
          >
            <div>{employeeForms.icon}</div>
            <h1 className="text-sm md:text-base font-semibold uppercase">
              {employeeForms.name}
            </h1>
            <p className="text-xs md:test-sm">{employeeForms.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
