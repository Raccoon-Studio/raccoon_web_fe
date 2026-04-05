/* /login route — server entry point with metadata. */
import type { Metadata } from "next";
import Login from "@/components/auth/login/Login";
export const metadata: Metadata = {
  title: "Sign In — Raccoon Studio",
  description:
    "Sign in to your Raccoon Studio account — the hub of all AI solutions.",
};

export default function LoginPage() {
  return <Login />;
}