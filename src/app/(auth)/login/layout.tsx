import type { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Sign In — Raccoon Studio",
  description: "Welcome back to the hub of every solution.",
};

export default function AuthLoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <>{children}</>;
}