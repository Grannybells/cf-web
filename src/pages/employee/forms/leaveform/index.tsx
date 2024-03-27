import NavBar from "@/components/employee/navBar";
import Loader from "@/components/loader";
import useSession from "@/contexts/use-session";
import React from "react";

export default function LeaveForm() {
  const { isLoading } = useSession();
  return (
    <div className="sticky top-0 flex flex-row w-screen h-screen overflow-scroll">
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full lg:w-[calc(100vw-18rem)] h-full p-5 gap-5">
          q
        </div>
      )}
    </div>
  );
}
