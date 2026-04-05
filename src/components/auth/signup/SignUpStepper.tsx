/* Horizontal step indicator with numbered circles and connecting lines. */
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { stepConfigs } from "@/data/auth/signup.data";
import type { SignUpStepperProps } from "@/lib/auth/signup.types";
import { cn } from "@/lib/utils";

export default function SignUpStepper({
  currentStep,
  className,
}: SignUpStepperProps) {
  return (
    <nav
      aria-label="Sign-up progress"
      className={cn("flex items-center justify-center gap-0", className)}
    >
      {stepConfigs.map((step, idx) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        const isLast = idx === stepConfigs.length - 1;

        return (
          <div key={step.id} className="flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                className={cn(
                  "flex h-9 w-9 ssm:h-10 ssm:w-10 items-center justify-center rounded-full text-sm font-heading font-bold transition-colors duration-300",
                  isCompleted &&
                    "solar-flare text-primary-foreground",
                  isActive &&
                    "border-2 border-primary bg-primary/10 text-primary",
                  !isActive &&
                    !isCompleted &&
                    "border border-border bg-surface-container text-on-surface-variant"
                )}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step.id
                )}
              </motion.div>
              <span
                className={cn(
                  "hidden ssm:block text-[10px] font-label uppercase tracking-widest transition-colors duration-300",
                  isActive && "text-primary",
                  isCompleted && "text-primary",
                  !isActive && !isCompleted && "text-on-surface-variant"
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {!isLast && (
              <div
                className={cn(
                  "mx-1.5 ssm:mx-2 h-px w-6 ssm:w-10 md:w-14 mb-5 ssm:mb-6 transition-colors duration-300",
                  step.id < currentStep
                    ? "bg-primary"
                    : "bg-border"
                )}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}