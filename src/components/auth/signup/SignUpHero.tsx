/* Left branding panel — adapts headline and illustration per step. */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/components/providers/store/hook";
import { fadeInUp, staggerContainer, stepSlide } from "@/app/styles/auth/signup.anim";
import { brand, heroStepContent, legalLinks } from "@/data/auth/signup.data";
import SignUpFeatures from "./SignUpFeatures";
import type { SignUpHeroProps } from "@/lib/auth/signup.types";
import { cn } from "@/lib/utils";

export default function SignUpHero({ className }: SignUpHeroProps) {
  const { currentStep, direction } = useAppSelector((s) => s.signup);
  const content = heroStepContent[currentStep] ?? heroStepContent[1];
  const BrandIcon = brand.icon;

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
        "min-h-[45vh] lg:min-h-screen",
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
          <BrandIcon className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-heading text-lg font-bold text-on-surface">
          {brand.name}
        </span>
      </motion.div>

      {/* ── Dynamic copy + illustration ── */}
      <div className="relative z-10 my-8 flex flex-col items-start lg:my-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepSlide}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <span className="m3-label mb-4 block">
              {content.eyebrow}
            </span>

            <h1
              className={cn(
                "display-monolith max-w-lg leading-[1.08]",
                "text-3xl ssm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.5rem]",
                "text-on-surface"
              )}
            >
              {content.headline}{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                {content.headlineAccent}
              </span>
            </h1>

            <p className="mt-4 max-w-md text-base ssm:text-lg text-on-surface-variant font-body">
              {content.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={fadeInUp}
          custom={4}
          className="mt-8 w-full lg:mt-12"
        >
          <SignUpFeatures />
        </motion.div>
      </div>

      {/* ── Legal footer ── */}
      <motion.footer
        variants={fadeInUp}
        custom={5}
        className="relative z-10 flex items-center gap-4 text-sm text-on-surface-variant"
      >
        {legalLinks.map((link, idx) => (
          <span key={link.href} className="flex items-center gap-4">
            {idx > 0 && (
              <span className="h-4 w-px bg-border" aria-hidden="true" />
            )}
            <Link
              href={link.href}
              className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </motion.footer>
    </motion.section>
  );
}