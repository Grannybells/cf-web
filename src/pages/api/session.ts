import { NextApiRequest, NextApiResponse } from "next";
import { getIronSession } from "iron-session";
import {
  SessionData,
  defaultSession,
  sessionOptions,
  sleep,
} from "@/contexts/lib";

// login
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getIronSession<SessionData>(
    request,
    response,
    sessionOptions
  );

  if (request.method === "POST") {
    const { email = "No username" } = request.body;

    session.isLoggedIn = true;
    session.email = email;

    await session.save();
    return response.json(session);
  } else if (request.method === "GET") {
    if (session.isLoggedIn !== true) {
      return response.json(defaultSession);
    }
    return response.json(session);
  } else if (request.method === "DELETE") {
    session.destroy();

    return response.json(defaultSession);
  }
  return response.status(405).end(`Method ${request.method} Not Allowed`);
}
