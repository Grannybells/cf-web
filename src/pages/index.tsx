import React, { FormEvent, useEffect, useState } from "react";
import useSession from "@/contexts/use-session";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Loader from "@/components/loader";

export default function Index() {
  const { session } = useSession();
  const router = useRouter();

  if (session.isLoggedIn) {
    router.replace("/employee");
  }
  return (
    <>
      <title>Login Page</title>
      <LoginForm />
    </>
  );
}

function LoginForm() {
  const { login, isLoading } = useSession();

  const router = useRouter();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    login(email, {
      optimisticData: {
        isLoggedIn: true,
        email,
      },
    });
    // router.push("/employee");
  };
  return (
    <main className="flex items-center justify-center w-screen h-screen font-poppins ">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <form
          className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[25%] h-[55%] border border-black/20 shadow-xl items-center justify-start gap-5 p-10"
          onSubmit={handleLogin}
          method="POST"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="w-full max-w-[264.15px] h-auto">
              <Image
                src="/cfimage.png"
                alt="Your Image Alt Text"
                layout="responsive"
                width={264.15}
                height={60}
                priority
              />
            </div>
            <h1 className="text-4xl uppercase font-bold">Login</h1>
          </div>
          <label className="flex flex-col w-full gap-2">
            <span className="font-semibold tracking-wide">Email</span>
            <input
              className="p-3 shadow-sm rounded-lg border border-black/50 focus:outline-none focus:ring focus:ring-green-500"
              type="text"
              name="email"
              placeholder="Enter Email"
            />
          </label>
          <label className="flex flex-col w-full gap-2">
            <span className="font-semibold tracking-wide">Password</span>
            <input
              className="p-3 shadow-sm rounded-lg border border-black/50 focus:outline-none focus:ring focus:ring-green-500"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </label>
          <button
            className="shadow-md text-xl uppercase px-10 py-2 bg-green-500 hover:bg-green-400 text-white hover:text-gray-500 rounded-md font-semibold focus:outline-none focus:ring focus:ring-green-500"
            type="submit"
            value="Login"
          >
            Login
          </button>
        </form>
      )}
    </main>
  );
}
