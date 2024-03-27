import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfileCard(props: { email: string }) {
  return (
    <div className="hidden lg:flex flex-row items-center justify-between w-full h-auto border border-red-500 font-poppins">
      <div className="flex flex-row items-center">
        <div className="flex w-28 h-28 items-center justify-center rounded-lg border border-red-500">
          <Image src="/profileSample.jpg" alt="Logo" width={112} height={112} />
        </div>
        <div className="flex flex-col w-auto h-auto px-5">
          <span>Gran Zulueta</span>
          <span>{props.email}</span>
          <span className="flex flex-row gap-3 items-center">
            <p>240954</p>
            <p>Programmer</p>
          </span>
          <p>MIS department</p>
        </div>
      </div>
    </div>
  );
}
