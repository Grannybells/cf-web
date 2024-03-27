import { getIronSession } from "iron-session";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { SessionData, sessionOptions } from "@/contexts/lib";
import Link from "next/link";
import NavBar from "@/components/employee/navBar";

export default function Forms({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
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
        destination: "/pages-router-api-route-swr",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}) satisfies GetServerSideProps<{
  session: SessionData;
}>;

function Content({ session }: { session: SessionData }) {
  return (
    <div>
      <NavBar />
      <p>
        Hello <strong>{session.email}!</strong>
      </p>
    </div>
  );
}
