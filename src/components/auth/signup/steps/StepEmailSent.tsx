/* Step 5 — Verification email sent confirmation. */
"use client";

import { motion } from "framer-motion";
import { MailCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { fadeInRight, staggerContainer, scaleIn } from "@/app/styles/auth/signup.anim";
import { emailSentContent } from "@/data/auth/signup.data";
import { cn } from "@/lib/utils";

export default function StepEmailSent() {
  const c = emailSentContent;

  const handleResend = () => {
    /* Placeholder — wire up your resend logic here. */
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center space-y-6 py-8"
    >
      {/* Icon */}
      <motion.div
        variants={scaleIn}
        className="flex h-20 w-20 ssm:h-24 ssm:w-24 items-center justify-center rounded-full solar-flare shadow-xl"
      >
        <MailCheck className="h-10 w-10 ssm:h-12 ssm:w-12 text-primary-foreground" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={fadeInRight}
        custom={1}
        className="font-heading text-2xl ssm:text-3xl font-bold text-on-surface"
      >
        {c.heading}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeInRight}
        custom={2}
        className="max-w-sm text-base text-on-surface-variant"
      >
        {c.description}
      </motion.p>

      {/* Subtext */}
      <motion.p
        variants={fadeInRight}
        custom={3}
        className="max-w-xs text-sm text-on-surface-variant/70"
      >
        {c.subtext}
      </motion.p>

      {/* Actions */}
      <motion.div
        variants={fadeInRight}
        custom={4}
        className="flex flex-col ssm:flex-row items-center gap-3 pt-2"
      >
        <Button
          type="button"
          variant="outline"
          onClick={handleResend}
          className={cn(
            "h-11 rounded-lg px-5 font-heading font-medium",
            "border-border text-on-surface",
            "hover:bg-surface-container-high",
            "active:scale-[0.98] transition-all duration-300"
          )}
        >
          {c.resendLabel}
        </Button>

        <Link
          href={c.backToLoginHref}
          className={cn(
            buttonVariants({ variant: "default" }),
            "group h-11 flex items-center justify-center rounded-lg px-6 font-heading font-semibold",
            "solar-flare text-primary-foreground",
            "hover:opacity-90 active:scale-[0.98] transition-all duration-300"
          )}
        >
          {c.backToLoginLabel}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  );
}