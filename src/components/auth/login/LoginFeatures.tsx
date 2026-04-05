"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Fingerprint, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure",
    description: "Enterprise-grade encryption protecting your data.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    borderGlow: "group-hover:border-emerald-500/30",
  },
  {
    icon: Fingerprint,
    title: "Passwordless",
    description: "Seamless biometric and single sign-on access.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderGlow: "group-hover:border-secondary/30",
  },
  {
    icon: Zap,
    title: "Instant",
    description: "Zero-latency authentication for immediate productivity.",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    borderGlow: "group-hover:border-amber-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function LoginFeatures({ className }: { className?: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("grid w-full grid-cols-1 gap-4 ssm:grid-cols-2 md:grid-cols-3", className)}
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            className={cn(
              "group relative flex flex-col items-start overflow-hidden rounded-2xl border border-white/5 bg-surface-container-highest/30 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-highest/50",
              feature.borderGlow
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                feature.iconBg,
                feature.iconColor
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-on-surface">
              {feature.title}
            </h3>
            <p className="mt-1 font-body text-sm leading-relaxed text-on-surface-variant">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
