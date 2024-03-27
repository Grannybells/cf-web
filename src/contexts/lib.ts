import { SessionOptions } from "iron-session";

export interface SessionData {
  email?: string;
  userRole?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "CleanFuel",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV! === "production",
    maxAge: 3600, // Set the session cookie to 1 hour
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
