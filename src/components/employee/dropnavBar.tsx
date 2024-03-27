import { defaultSession } from "@/contexts/lib";
import useSession from "@/contexts/use-session";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoSignOut } from "react-icons/go";
import { navItems, shortCutLinks } from "@/contexts/constant";
import { IoClose, IoMenu } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { BsFillMenuAppFill } from "react-icons/bs";

export default function DropnavBar(props: { email: string }) {
  const { logout } = useSession();
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    logout(null, {
      optimisticData: defaultSession,
    });
    router.push("/");
  };

  const handleDropNav = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div className="flex w-full h-auto lg:hidden font-poppins tracking-wide overflow-scroll">
      <div className="flex flex-row items-center justify-between w-full">
        <Link href={"/employee"}>
          <Image src="/cflogonew.png" alt="Logo" width={200} height={40} />
        </Link>
        <button onClick={handleDropNav}>
          <IoMenu className="text-blue-500 w-10 h-10" />
        </button>
      </div>
      {isOpen ? (
        ""
      ) : (
        <div className="absolute flex flex-row-reverse z-50 top-0 right-0 w-full min-h-full h-auto bg-black/50 overflow-scroll">
          <div className="flex flex-col w-3/4 h-full bg-green-100 px-5 pt-5 pb-[15rem] gap-5">
            <div className="flex flex-col w-full h-auto gap-2">
              <button onClick={handleDropNav} className="flex ">
                <IoClose className="w-10 h-10 text-blue-500" />
              </button>

              <div className="flex flex-row items-center w-full h-auto ">
                <div className="flex w-24 h-24 items-center justify-center rounded-lg mr-2 overflow-auto bg-white">
                  <Image
                    src="/profileSample.jpg"
                    alt="Logo"
                    width={96}
                    height={96}
                  />
                </div>
                <div className="flex flex-col w-auto h-auto text-gray-950">
                  <span className="text-base -mb-1 font-bold">
                    Gran Zulueta
                  </span>
                  <span className="text-xs">{props.email}</span>
                  <span className="flex flex-row gap-1 items-center">
                    <p className="text-xs font-bold">Employee Id:</p>
                    <p className="text-xs">240954</p>
                  </span>
                  <span className="flex flex-row gap-1 items-center">
                    <p className="text-xs font-bold">Position:</p>
                    <p className="text-xs">Programmer</p>
                  </span>
                  <p className="text-xs">MIS department</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-autopb-10 rounded-md border border-black/10 shadow-md overflow-hidden">
              <div className="flex flex-col w-full h-auto gap-2 pb-2 bg-white">
                <span className="flex flex-row gap-2 w-full p-2 items-center bg-[#5BBF21] font-semibold text-sm uppercase text-white">
                  <BsFillMenuAppFill />
                  Navigation
                </span>
                {navItems.map((navItems) => (
                  <Link
                    key={navItems.id}
                    className={`flex flex-row items-center gap-2 ml-2 hover:border-l-[0.5rem] hover:border-[#5BBF21] hover:pl-2 ${
                      isActive(navItems.link) &&
                      "border-l-[0.5rem] border-[#5BBF21] pl-2 text-[#5BBF21] font-semibold"
                    }`}
                    href={navItems.link}
                  >
                    {isActive(navItems.link) ? (
                      <div className="gap-2 flex flex-row items-center pl-2 text-[#5BBF21]">
                        {navItems.activeIcon}
                        {navItems.name}
                      </div>
                    ) : (
                      <div className="gap-2 flex flex-row items-center text-blue-500">
                        {navItems.icon}
                        {navItems.name}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full h-auto rounded-md  border border-black/10 shadow-md overflow-hidden">
              <div className="flex flex-col w-full h-auto">
                <span className="flex flex-row gap-2 w-full p-2 items-center bg-[#5BBF21] font-semibold text-sm uppercase text-white">
                  <TiStarFullOutline />
                  Quick links
                </span>

                <div className="grid grid-cols-2 grid-flow-row gap-4 py-5 px-3 bg-white">
                  {shortCutLinks.map((shortCutLinks) => (
                    <Link
                      key={shortCutLinks.id}
                      href={shortCutLinks.link}
                      className="group flex flex-col items-center justify-center text-center bg-white py-3 px-2 w-auto h-auto rounded-md shadow-md border-[1px] border-[#5BBF21]/50 hover:bg-[#5BBF21] hover:border-[3px] hover:border-green-600 hover:font-semibold"
                    >
                      <div className="text-blue-500 group-hover:text-white">
                        {shortCutLinks.icon}
                      </div>
                      <div className="text-blue-500 text-xs group-hover:text-white">
                        {shortCutLinks.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="flex flex-row items-center justify-center gap-3 shadow-md text-base uppercase px-10 py-2 bg-[#5BBF21] hover:bg-[#55E800] text-white hover:text-gray-500 rounded-md font-semibold focus:outline-none focus:ring focus:ring-green-500"
              onClick={handleLogout}
            >
              <GoSignOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
