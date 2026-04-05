/* Step 3 — Country, State, and Exact Address (same for both user types). */
"use client";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import {
  setAddressField,
  nextStep,
  prevStep,
  setErrors,
  clearErrors,
} from "@/components/providers/store/slices/signupSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fadeInRight, staggerContainer } from "@/app/styles/auth/signup.anim";
import { addressFields } from "@/data/auth/signup.data";
import { countries, indianStates } from "@/lib/auth/signup.constants";
import StepNavigation from "./StepNavigation";
import { cn } from "@/lib/utils";

export default function StepAddress() {
  const dispatch = useAppDispatch();
  const { address, errors } = useAppSelector((s) => s.signup);
  const f = addressFields;
  const isIndia = address.country === "india";

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!address.country) e.country = "Please select a country.";
    if (!address.state.trim()) e.state = "State / province is required.";
    if (!address.exactAddress.trim()) e.exactAddress = "Address is required.";
    dispatch(setErrors(e));
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      dispatch(clearErrors());
      dispatch(nextStep());
    }
  };

  const set = (field: keyof typeof address, value: string) =>
    dispatch(setAddressField({ field, value }));

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeInRight} custom={0}>
        <h2 className="font-heading text-2xl ssm:text-3xl font-bold text-on-surface">
          {f.heading}
        </h2>
        <p className="mt-2 text-sm ssm:text-base text-on-surface-variant">
          {f.description}
        </p>
      </motion.div>

      {/* Country */}
      <motion.div variants={fadeInRight} custom={1}>
        <Label htmlFor={f.country.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.country.label}
        </Label>
        <Select
          value={address.country}
          onValueChange={(v) => {
            set("country", v || "");
            set("state", "");
          }}
        >
          <SelectTrigger
            id={f.country.id}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.country && "border-destructive"
            )}
          >
            <SelectValue placeholder={f.country.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="mt-1 text-sm text-destructive">{errors.country}</p>}
      </motion.div>

      {/* State */}
      <motion.div variants={fadeInRight} custom={2}>
        <Label htmlFor={f.state.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.state.label}
        </Label>
        {isIndia ? (
          <Select value={address.state} onValueChange={(v) => set("state", v || "")}>
            <SelectTrigger
              id={f.state.id}
              className={cn(
                "h-11 rounded-lg border-border bg-surface-container-low",
                errors.state && "border-destructive"
              )}
            >
              <SelectValue placeholder={f.state.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input
            id={f.state.id}
            placeholder={f.state.placeholder}
            value={address.state}
            onChange={(e) => set("state", e.target.value)}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.state && "border-destructive"
            )}
          />
        )}
        {errors.state && <p className="mt-1 text-sm text-destructive">{errors.state}</p>}
      </motion.div>

      {/* Exact Address */}
      <motion.div variants={fadeInRight} custom={3}>
        <Label htmlFor={f.exactAddress.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.exactAddress.label}
        </Label>
        <Textarea
          id={f.exactAddress.id}
          placeholder={f.exactAddress.placeholder}
          value={address.exactAddress}
          onChange={(e) => set("exactAddress", e.target.value)}
          rows={3}
          className={cn(
            "rounded-lg border-border bg-surface-container-low resize-none",
            errors.exactAddress && "border-destructive"
          )}
        />
        {errors.exactAddress && <p className="mt-1 text-sm text-destructive">{errors.exactAddress}</p>}
      </motion.div>

      <StepNavigation onBack={() => dispatch(prevStep())} onNext={handleNext} />
    </motion.div>
  );
}