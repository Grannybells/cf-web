import Image from "next/image";
import React from "react";

const MailLoader = () => {
  return (
    <div className="w-64 h-64 flex items-center justify-center font-poppins">
      <Image
        src="/mail.gif"
        alt="Your Image Alt Text"
        width={250}
        height={250}
      />
    </div>
  );
};

export default MailLoader;
