/* Left branding panel — logo, headline, animated orb, and legal links. */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "./login.anim";
import LoginFeatures from "./LoginFeatures";
import type { LoginHeroProps } from "./login.types";
import { cn } from "@/lib/utils";

export default function LoginHero({ className }: LoginHeroProps) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      aria-label="Branding"
      className={cn(
        "relative flex flex-col justify-between overflow-hidden",
        "bg-surface-container-low",
        "p-6 ssm:p-8 md:p-10 lg:p-12 xl:p-16",
        "min-h-[50vh] lg:min-h-screen",
        className
      )}
    >
      {/* ── Background Image Layer ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/auth-bg.png"
          alt="Abstract dark theme background"
          fill
          priority
          className="object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-br from-surface-container-low/80 via-transparent to-surface-container-low/90" />
      </div>

      {/* ── Brand mark ── */}
      <motion.div
        variants={fadeInUp}
        custom={0}
        className="relative z-10 flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full solar-flare shadow-lg">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-heading text-lg font-bold text-on-surface">
          Raccoon Studio
        </span>
      </motion.div>

      {/* ── Copy + orb ── */}
      <div className="relative z-10 my-8 flex flex-col items-start lg:my-0">
        <motion.span
          variants={fadeInUp}
          custom={1}
          className="m3-label mb-4 block"
        >
          Welcome back
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          custom={2}
          className={cn(
            "display-monolith max-w-lg leading-[1.08]",
            "text-3xl ssm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem]",
            "text-on-surface"
          )}
        >
          Welcome Back to{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            the SaaS
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={3}
          className="mt-4 max-w-md font-body text-base text-on-surface-variant ssm:text-lg"
        >
          The hub of all AI solutions — manage, create, and deploy with ease.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={4}
          className="mt-8 w-full lg:mt-12"
        >
          <LoginFeatures />
        </motion.div>
      </div>

      {/* ── Legal footer ── */}
      <motion.footer
        variants={fadeInUp}
        custom={5}
        className="relative z-10 flex items-center gap-4 text-sm text-on-surface-variant"
      >
        <Link
          href="/privacy"
          className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Privacy Policy
        </Link>
        <span className="h-4 w-px bg-border" aria-hidden="true" />
        <Link
          href="/terms"
          className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Terms &amp; Conditions
        </Link>
      </motion.footer>
    </motion.section>
  );
}