/* Right form panel — renders the correct step component with animated transitions. */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/components/providers/store/hook";
import { stepSlide } from "@/app/styles/auth/signup.anim";
import SignUpStepper from "./SignUpStepper";
import StepUserType from "./steps/StepUserType";
import StepPersonalDetails from "./steps/StepPersonalDetails";
import StepBusinessDetails from "./steps/StepBusinessDetails";
import StepAddress from "./steps/StepAddress";
import StepVerification from "./steps/StepVerification";
import StepEmailSent from "./steps/StepEmailSent";
import { stepConfigs } from "@/data/auth/signup.data";
import type { SignUpFormProps } from "@/lib/auth/signup.types";
import { cn } from "@/lib/utils";

function StepRenderer({ step, userType }: { step: number; userType: string | null }) {
  switch (step) {
    case 1:
      return <StepUserType />;
    case 2:
      return userType === "business" ? (
        <StepBusinessDetails />
      ) : (
        <StepPersonalDetails />
      );
    case 3:
      return <StepAddress />;
    case 4:
      return <StepVerification />;
    case 5:
      return <StepEmailSent />;
    default:
      return <StepUserType />;
  }
}

export default function SignUpForm({ className }: SignUpFormProps) {
  const { currentStep, direction, userType } = useAppSelector((s) => s.signup);

  return (
    <section
      aria-label="Sign-up form"
      className={cn(
        "flex flex-col",
        "p-6 ssm:p-8 md:p-10 lg:p-12 xl:p-16",
        "lg:min-h-screen lg:overflow-y-auto",
        className
      )}
    >
      {/* ── Stepper ── */}
      <div className="mb-8 lg:mb-10">
        <SignUpStepper
          currentStep={currentStep}
          totalSteps={stepConfigs.length}
        />
      </div>

      {/* ── Step content ── */}
      <div className="mx-auto w-full max-w-lg flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepSlide}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <StepRenderer step={currentStep} userType={userType} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}