import { getIronSession } from "iron-session";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { SessionData, sessionOptions } from "@/contexts/lib";
import NavBar from "@/components/employee/navBar";
import useSession from "@/contexts/use-session";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Admin({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className=" bg-slate-200">
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
    <div className="flex flex-row w-screen h-screen">
      <NavBar />
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>Hello, {session.email}! You are currently at dashboard admin page!</>
      )}
    </div>
  );
}
