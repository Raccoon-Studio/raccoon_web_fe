/* /signup route — server entry point with metadata sourced from data file. */
import type { Metadata } from "next";
import SignUp from "@/components/auth/signup/SignUp";
import { signupMeta } from "@/data/auth/signup.data";

export const metadata: Metadata = {
  title: signupMeta.title,
  description: signupMeta.description,
};

export default function SignUpPage() {
  return <SignUp />;
}