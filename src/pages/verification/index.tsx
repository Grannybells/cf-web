import Loader from "@/components/loader";
import MailLoader from "@/components/mailLoader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Verification() {
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const handleVerification = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const confirmPassword = formData.get("confirmPassword") as string;

  //   if (!email || !password || !confirmPassword) {
  //     setError("Enter all fields");
  //     return;
  //   }

  //   setToast(false);
  //   setIsLoading(true);

  //   let data = new FormData();
  //   data.append("email", email);
  //   data.append("password", password);
  //   data.append("confirm_password", confirmPassword);

  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "http://localhost:81/user-update-request.php",
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       if (response.data === "Email sent successfully") {
  //         setIsLoading(false);
  //         setToast(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <main className="flex items-center justify-center w-screen h-screen font-poppins">
      <title>Verification Page</title>
      <form
        className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[25%] h-[65%] border border-black/20 shadow-xl items-center justify-start gap-5 p-10"
        // onSubmit={handleVerification}
        method="POST"
      >
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/cfimage.png"
            alt="Your Image Alt Text"
            width={300}
            height={150}
          />
          <h1 className="text-4xl text-center uppercase font-bold">
            Create Password
          </h1>
        </div>
        {isLoading ? (
          <MailLoader />
        ) : (
          <>
            <label className="flex flex-col w-full gap-2">
              <span className="font-semibold tracking-wide">Employee ID</span>
              <input
                className="p-3 shadow-sm rounded-lg border border-black/50 focus:outline-none focus:ring focus:ring-green-500"
                type="text"
                name="employeeId"
                required
                placeholder="Enter Employee ID"
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <span className="font-semibold tracking-wide">Email</span>
              <input
                className="p-3 shadow-sm rounded-lg border border-black/50 focus:outline-none focus:ring focus:ring-green-500"
                type="email"
                name="email"
                required
                placeholder="Enter Email"
              />
            </label>
            <label className="flex flex-col w-full gap-2">
              <span className="font-semibold tracking-wide">Password</span>
              <input
                className="p-3 shadow-sm rounded-lg border border-black/50 focus:outline-none focus:ring focus:ring-green-500"
                type="password"
                name="password"
                required
                placeholder="Enter Email"
              />
            </label>
            <button
              className="shadow-md text-xl uppercase px-10 py-2 bg-green-500 hover:bg-green-400 text-white hover:text-gray-500 rounded-md font-semibold focus:outline-none focus:ring focus:ring-green-500"
              type="submit"
            >
              Verify
            </button>
            {toast && (
              <div className="flex items-center justify-center absolute top-0 z-50 bg-black/50 h-screen w-screen backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center w-96 h-96 px-10 gap-5 bg-white rounded-md">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#22c55e"
                      className="w-20 h-20 "
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <p className="text-center font-semibold border-b-2 pb-3">
                      A verification link has been sent to your Email account!
                    </p>
                    <p className=" text-xs text-center pt-3 pb-10">
                      Please click on the link that has just been sent to your
                      email account to verify your account.
                    </p>
                    <Link
                      className="px-10 py-2 shadow-lg bg-green-500 hover:bg-green-400 text-white hover:text-gray-500 rounded-md font-semibold"
                      href={"/"}
                    >
                      OK
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {error && (
          <p className="w-full h-10 border flex items-center justify-center bg-red-300 text-red-500 tracking-wider font-semibold">
            {error}
          </p>
        )}
      </form>
    </main>
  );
}
