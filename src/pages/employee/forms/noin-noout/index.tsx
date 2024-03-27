import NavBar from "@/components/employee/navBar";
import Loader from "@/components/loader";
import useSession from "@/contexts/use-session";
import Link from "next/link";
import React from "react";

export default function NoinNoout() {
  const { session, isLoading } = useSession();
  return (
    <div className="flex flex-row w-screen h-screen overflow-scroll bg-slate-100">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full items-center h-full py-5 px-2 gap-5">
          <div className="flex flex-col items-center bg-white xl:w-[60%] w-[95%] h-auto p-2 md:p-5 gap-5">
            <div className="flex flex-col md:flex-row gap-5 w-full h-auto">
              <label className="flex flex-col w-full md:w-1/2 h-auto">
                <span>Name</span>
                <input
                  type="text"
                  disabled
                  defaultValue="Gran Zulueta"
                  className="w-full p-2 border"
                />
              </label>
              <label className="flex flex-col w-full md:w-1/2 h-auto">
                <span>Email</span>
                <input
                  type="text"
                  disabled
                  className="w-full h-auto p-2 border"
                  defaultValue={session.email}
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full h-auto">
              <label className="flex flex-col w-full md:w-1/2 h-auto">
                <span>Payroll Period</span>
                <input
                  type="text"
                  placeholder="Enter Date of payroll period"
                  className="w-full p-2 border"
                />
              </label>
              <label className="flex flex-col w-full md:w-1/2 h-auto">
                <span>Department/Branch</span>
                <input
                  type="text"
                  placeholder="Enter Department/Branch"
                  className="w-full h-auto p-2 border"
                />
              </label>
            </div>
            <label className="w-full h-auto">
              <span>Type a question</span>
              <div className="grid grid-cols-5 grid-flow-row gap-x-1">
                <div className="border text-center p-2">Top 01</div>
                <div className="border text-center p-2">Top 02</div>
                <div className="border text-center p-2">Top 03</div>
                <div className="border text-center p-2">Top 04</div>
                <div className="border text-center p-2">Top 05</div>
                <input
                  type="text"
                  placeholder="Bottom 01"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 02"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 03"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 04"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 05"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 01"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 02"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 03"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 04"
                  className="p-2 border"
                />
                <input
                  type="text"
                  placeholder="Bottom 05"
                  className="p-2 border"
                />
              </div>
            </label>
            <label className="flex flex-col w-full h-auto">
              <span>Proof of duty</span>
              <input
                type="file"
                className="flex flex-col items-center justify-center w-full h-[10rem] p-2 border"
              />
            </label>
            <span>
              Note: To be submitted to accounting for payroll purposes once
              approved by HRD.
            </span>
            <button className="flex items-center justify-center w-[50%] py-2 bg-green-500 ">
              Submit
            </button>
            <Link
              href={"/employee/forms"}
              className="flex items-center justify-center w-[50%] py-2 bg-green-500"
            >
              Go back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
