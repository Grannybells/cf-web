import { getIronSession } from "iron-session";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { SessionData, sessionOptions } from "@/contexts/lib";
import NavBar from "@/components/employee/navBar";
import useSession from "@/contexts/use-session";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfileCard from "@/components/employee/profileCard";
import ShortCut from "@/components/employee/shortCut";
import Loader from "@/components/loader";
import DropnavBar from "@/components/employee/dropnavBar";
import Annoucement from "@/components/employee/annoucement";
import HolidaySchedule from "@/components/employee/holidaySchedule";
import WeeklyCalendar from "@/components/employee/weeklyCalendar";

export default function Employee({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className=" bg-slate-100">
      <title>Home</title>
      <Content session={session} />
    </main>
  );
}

export const getServerSideProps = (async (context) => {
  const session = await getIronSession<SessionData>(
    context.req,
    context.res,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}) satisfies GetServerSideProps<{
  session: SessionData;
}>;

function Content({ session }: { session: SessionData }) {
  const { isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session.isLoggedIn) {
      router.replace("/");
    }
  }, [isLoading, session.isLoggedIn, router]);

  return (
    <div className="sticky top-0 flex flex-row w-screen h-screen overflow-scroll">
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full lg:w-[calc(100vw-18rem)] h-full p-5 gap-5">
          <DropnavBar email={session.email || ""} />
          <ProfileCard email={session.email || ""} />
          <ShortCut />
          <div className="bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500">
            State!
          </div>
          <div className="flex flex-col xl:flex-row w-full h-auto gap-5 border border-green-500">
            <Annoucement />
            <div className="flex flex-col xl:w-1/2 w-full h-auto gap-5 border border-yellow-500">
              <WeeklyCalendar />
              <HolidaySchedule />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
