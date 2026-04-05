/* Step 1 — Choose Individual or Organization. */
"use client";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import { setUserType, nextStep, clearErrors } from "@/components/providers/store/slices/signupSlice";
import { fadeInRight, staggerContainer } from "@/app/styles/auth/signup.anim";
import { stepOneContent, userTypeCards } from "@/data/auth/signup.data";
import type { UserType } from "@/lib/auth/signup.types";
import { cn } from "@/lib/utils";

export default function StepUserType() {
  const dispatch = useAppDispatch();
  const { userType } = useAppSelector((s) => s.signup);

  const handleSelect = (type: UserType) => {
    dispatch(setUserType(type));
    dispatch(clearErrors());
    setTimeout(() => dispatch(nextStep()), 350);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={fadeInRight} custom={0}>
        <h2 className="font-heading text-2xl ssm:text-3xl font-bold text-on-surface">
          {stepOneContent.heading}
        </h2>
        <p className="mt-2 text-sm ssm:text-base text-on-surface-variant">
          {stepOneContent.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 ssm:grid-cols-2 gap-4 ssm:gap-6">
        {userTypeCards.map((card, idx) => (
          <motion.button
            key={card.id}
            variants={fadeInRight}
            custom={idx + 1}
            type="button"
            onClick={() => handleSelect(card.id)}
            aria-pressed={userType === card.id}
            className={cn(
              "group flex flex-col items-center gap-4 rounded-xl border-2 p-6 ssm:p-8 transition-all duration-300 cursor-pointer",
              "hover:border-primary/50 hover:bg-primary/5",
              "active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              userType === card.id
                ? "border-primary bg-primary/10 shadow-md"
                : "border-border bg-surface-container-low"
            )}
          >
            <span className="text-5xl ssm:text-6xl select-none group-hover:scale-110 transition-transform duration-300">
              {card.emoji}
            </span>
            <div className="text-center">
              <p className="font-heading text-lg font-bold text-on-surface">
                {card.title}
              </p>
              <p className="mt-1 text-sm text-on-surface-variant">
                {card.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}