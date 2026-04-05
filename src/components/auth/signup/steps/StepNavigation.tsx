/* Reusable back / next button bar for each form step. */
"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StepNavigationProps } from "@/lib/auth/signup.types";
import { navLabels } from "@/data/auth/signup.data";
import { cn } from "@/lib/utils";

export default function StepNavigation({
  onBack,
  onNext,
  nextLabel = navLabels.next,
  backLabel = navLabels.back,
  isLoading = false,
  showBack = true,
  nextDisabled = false,
}: StepNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      {showBack && onBack ? (
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className={cn(
            "h-11 rounded-lg px-5 font-heading font-medium",
            "border-border text-on-surface",
            "hover:bg-surface-container-high",
            "active:scale-[0.98] transition-all duration-300"
          )}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backLabel}
        </Button>
      ) : (
        <div />
      )}

      <Button
        type="button"
        disabled={isLoading || nextDisabled}
        onClick={onNext}
        className={cn(
          "group h-11 rounded-lg px-6 font-heading font-semibold",
          "solar-flare text-primary-foreground",
          "hover:opacity-90 active:scale-[0.98] transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            {nextLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </Button>
    </div>
  );
}