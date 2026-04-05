/* Static content, labels, links, and config for the Login module. */
import { Sparkles } from "lucide-react";
import type { ComponentType } from "react";

/* ── Brand ── */
export const brand = {
  name: "Raccoon Studio",
  icon: Sparkles as ComponentType<{ className?: string }>,
} as const;

/* ── Hero panel ── */
export const heroContent = {
  eyebrow: "Welcome back",
  headline: "Welcome Back to",
  headlineAccent: "the SaaS",
  subheadline: "The hub of all AI solutions — manage, create, and deploy with ease.",
} as const;

/* ── Legal footer links ── */
export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

/* ── Form panel ── */
export const formContent = {
  heading: "Sign in to your account",
  description: "Enter your email to continue",
  dividerLabel: "OR",
  signUpPrompt: "New user?",
  signUpLabel: "Sign Up",
  signUpHref: "/signup",
} as const;

/* ── Email field ── */
export const emailField = {
  id: "login-email",
  label: "Email",
  placeholder: "Enter your email address",
  errorId: "login-email-error",
  validationMessage: "Please enter a valid email address.",
} as const;

/* ── Buttons ── */
export const submitButton = {
  label: "Enter to the SaaS",
  loadingLabel: "Signing in…",
} as const;

/* ── OAuth providers ── */
export interface OAuthProvider {
  id: string;
  label: string;
  svgPaths: { d: string; fill: string }[];
  viewBox: string;
}

export const oauthProviders: OAuthProvider[] = [
  {
    id: "google",
    label: "Sign in with Google",
    viewBox: "0 0 24 24",
    svgPaths: [
      {
        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z",
        fill: "#4285F4",
      },
      {
        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
        fill: "#34A853",
      },
      {
        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.4l3.56-2.77z",
        fill: "#FBBC05",
      },
      {
        d: "M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 6.07l3.66 2.84c.87-2.6 3.3-4.16 6.16-4.16z",
        fill: "#EA4335",
      },
    ],
  },
] as const;

/* ── Page-level metadata (used by app/login/page.tsx) ── */
export const loginMeta = {
  title: "Sign In — Raccoon Studio",
  description:
    "Sign in to your Raccoon Studio account — the hub of all AI solutions.",
} as const;