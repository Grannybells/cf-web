import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="/loader.gif"
        alt="Your Image Alt Text"
        width={50}
        height={50}
        priority
        unoptimized
      />
    </div>
  );
};

export default Loader;
