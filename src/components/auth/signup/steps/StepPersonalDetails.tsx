/* Step 2 (Individual) — First/Last name, email, contact, DOB. */
"use client";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import {
  setIndividualField,
  nextStep,
  prevStep,
  setErrors,
  clearErrors,
} from "@/components/providers/store/slices/signupSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fadeInRight, staggerContainer } from "@/app/styles/auth/signup.anim";
import { individualFields } from "@/data/auth/signup.data";
import StepNavigation from "./StepNavigation";
import { cn } from "@/lib/utils";

export default function StepPersonalDetails() {
  const dispatch = useAppDispatch();
  const { individual, errors } = useAppSelector((s) => s.signup);
  const f = individualFields;

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!individual.firstName.trim()) e.firstName = "First name is required.";
    if (!individual.lastName.trim()) e.lastName = "Last name is required.";
    if (!individual.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(individual.email))
      e.email = "Enter a valid email address.";
    if (!individual.contactNo.trim()) e.contactNo = "Contact number is required.";
    if (!individual.dateOfBirth) e.dateOfBirth = "Date of birth is required.";
    dispatch(setErrors(e));
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      dispatch(clearErrors());
      dispatch(nextStep());
    }
  };

  const set = (field: keyof typeof individual, value: string) =>
    dispatch(setIndividualField({ field, value }));

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

      <div className="grid grid-cols-1 ssm:grid-cols-2 gap-5">
        {/* First Name */}
        <motion.div variants={fadeInRight} custom={1}>
          <Label htmlFor={f.firstName.id} className="mb-2 block text-sm font-medium text-on-surface">
            {f.firstName.label}
          </Label>
          <Input
            id={f.firstName.id}
            placeholder={f.firstName.placeholder}
            value={individual.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.firstName && "border-destructive"
            )}
          />
          {errors.firstName && <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>}
        </motion.div>

        {/* Last Name */}
        <motion.div variants={fadeInRight} custom={2}>
          <Label htmlFor={f.lastName.id} className="mb-2 block text-sm font-medium text-on-surface">
            {f.lastName.label}
          </Label>
          <Input
            id={f.lastName.id}
            placeholder={f.lastName.placeholder}
            value={individual.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.lastName && "border-destructive"
            )}
          />
          {errors.lastName && <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>}
        </motion.div>
      </div>

      {/* Email */}
      <motion.div variants={fadeInRight} custom={3}>
        <Label htmlFor={f.email.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.email.label}
        </Label>
        <Input
          id={f.email.id}
          type="email"
          autoComplete="email"
          placeholder={f.email.placeholder}
          value={individual.email}
          onChange={(e) => set("email", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.email && "border-destructive"
          )}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </motion.div>

      {/* Contact No */}
      <motion.div variants={fadeInRight} custom={4}>
        <Label htmlFor={f.contactNo.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.contactNo.label}
        </Label>
        <Input
          id={f.contactNo.id}
          type="tel"
          placeholder={f.contactNo.placeholder}
          value={individual.contactNo}
          onChange={(e) => set("contactNo", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.contactNo && "border-destructive"
          )}
        />
        {errors.contactNo && <p className="mt-1 text-sm text-destructive">{errors.contactNo}</p>}
      </motion.div>

      {/* Date of Birth */}
      <motion.div variants={fadeInRight} custom={5}>
        <Label htmlFor={f.dateOfBirth.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.dateOfBirth.label}
        </Label>
        <Input
          id={f.dateOfBirth.id}
          type="date"
          value={individual.dateOfBirth}
          onChange={(e) => set("dateOfBirth", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.dateOfBirth && "border-destructive"
          )}
        />
        {errors.dateOfBirth && <p className="mt-1 text-sm text-destructive">{errors.dateOfBirth}</p>}
      </motion.div>

      <StepNavigation onBack={() => dispatch(prevStep())} onNext={handleNext} />
    </motion.div>
  );
}