import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";

interface VerificationIDProps {
  id: string;
}

const VerificationID = ({ id }: VerificationIDProps) => {
  console.log(id);
  return (
    <div className="flex w-screen h-screen items-center justify-center font-poppins tracking-wide">
      <div className="flex flex-col items-center gap-7">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#22c55e"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-4xl font-semibold">Congratulations!</h1>
          <p className="text-normal">Your account is now validated!</p>
          <h1>Your verification ID is {id}</h1>
        </div>
        <Link
          href={"/"}
          className="px-10 py-2 shadow-lg bg-green-500 hover:bg-green-400 text-white hover:text-gray-500 rounded-md font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default VerificationID;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const { verificationID } = params as { verificationID: string }; // Specify the type for params if necessary

  return {
    props: {
      id: verificationID,
    },
  };
}
