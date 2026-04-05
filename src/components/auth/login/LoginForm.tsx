/* Right form panel — email input, submit CTA, OAuth, and sign-up link. */
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import type { RootState } from "@/components/providers/store/store";
import { setEmail, setLoading, setError } from "@/components/providers/store/slices/authSlice";
import { fadeInRight, staggerContainer } from "./login.anim";
import type { LoginFormProps } from "./login.types";
import { cn } from "@/lib/utils";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.4l3.56-2.77z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 6.07l3.66 2.84c.87-2.6 3.3-4.16 6.16-4.16z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function LoginForm({ className }: LoginFormProps) {
  const dispatch = useAppDispatch();
  const { email, isLoading, error } = useAppSelector((s: RootState) => s.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }
    dispatch(setError(null));
    dispatch(setLoading(true));
    /* Replace with real authentication logic. */
    await new Promise((r) => setTimeout(r, 1500));
    dispatch(setLoading(false));
  };

  const handleGoogleSignIn = () => {
    /* Placeholder — wire up your OAuth provider here. */
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      aria-label="Login form"
      className={cn(
        "flex flex-col justify-center",
        "p-6 ssm:p-8 md:p-10 lg:p-12 xl:p-16",
        "lg:min-h-screen",
        className
      )}
    >
      <div className="mx-auto w-full max-w-md">
        {/* ── Heading ── */}
        <motion.div variants={fadeInRight} custom={0} className="mb-8 lg:mb-10">
          <h2 className="font-heading text-2xl ssm:text-3xl font-bold text-on-surface">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm ssm:text-base text-on-surface-variant">
            Enter your email to continue
          </p>
        </motion.div>

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <motion.div variants={fadeInRight} custom={1}>
            <Label
              htmlFor="login-email"
              className="mb-2 block text-sm font-medium text-on-surface"
            >
              Email
            </Label>
            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              aria-invalid={!!error}
              aria-describedby={error ? "login-email-error" : undefined}
              className={cn(
                "h-12 rounded-lg border-border bg-surface-container-low",
                "placeholder:text-on-surface-variant/50",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
                "transition-all duration-200",
                error && "border-destructive focus-visible:ring-destructive"
              )}
            />
            {error && (
              <p
                id="login-email-error"
                role="alert"
                className="mt-2 text-sm text-destructive"
              >
                {error}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInRight} custom={2}>
            <Button
              type="submit"
              disabled={isLoading}
              className={cn(
                "group h-12 w-full rounded-lg font-heading font-semibold",
                "solar-flare text-primary-foreground",
                "hover:opacity-90 active:scale-[0.98] transition-all duration-300",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Signing in…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Enter to the SaaS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </motion.div>
        </form>

        {/* ── Divider ── */}
        <motion.div
          variants={fadeInRight}
          custom={3}
          className="my-8 flex items-center gap-4"
        >
          <Separator className="flex-1 bg-border" />
          <span className="select-none font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
            OR
          </span>
          <Separator className="flex-1 bg-border" />
        </motion.div>

        {/* ── Google OAuth ── */}
        <motion.div variants={fadeInRight} custom={4}>
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className={cn(
              "h-12 w-full rounded-lg font-medium",
              "border-border bg-surface-container-low text-on-surface",
              "hover:bg-surface-container-high hover:border-primary/30",
              "active:scale-[0.98] transition-all duration-300"
            )}
          >
            <GoogleIcon className="mr-2.5 h-5 w-5" />
            Sign in with Google
          </Button>
        </motion.div>

        {/* ── Sign-up redirect ── */}
        <motion.p
          variants={fadeInRight}
          custom={5}
          className="mt-8 text-center text-sm text-on-surface-variant"
        >
          New user?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary underline-offset-4 hover:underline rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Sign Up
          </Link>
        </motion.p>
      </div>
    </motion.section>
  );
}