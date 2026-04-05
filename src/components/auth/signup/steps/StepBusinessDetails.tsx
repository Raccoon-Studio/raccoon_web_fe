/* Step 2 (Business) — Biz name, type, email, contact, employee count. */
"use client";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import {
  setBusinessField,
  nextStep,
  prevStep,
  setErrors,
  clearErrors,
} from "@/components/providers/store/slices/signupSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fadeInRight, staggerContainer } from "@/app/styles/auth/signup.anim";
import { businessFields } from "@/data/auth/signup.data";
import { businessTypes, employeeRanges } from "@/lib/auth/signup.constants";
import StepNavigation from "./StepNavigation";
import { cn } from "@/lib/utils";

export default function StepBusinessDetails() {
  const dispatch = useAppDispatch();
  const { business, errors } = useAppSelector((s) => s.signup);
  const f = businessFields;

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!business.businessName.trim()) e.businessName = "Business name is required.";
    if (!business.businessType) e.businessType = "Select a business type.";
    if (!business.businessEmail.trim()) e.businessEmail = "Business email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.businessEmail))
      e.businessEmail = "Enter a valid email address.";
    if (!business.contactNo.trim()) e.contactNo = "Contact number is required.";
    if (!business.employeeCount) e.employeeCount = "Select employee range.";
    dispatch(setErrors(e));
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      dispatch(clearErrors());
      dispatch(nextStep());
    }
  };

  const set = (field: keyof typeof business, value: string) =>
    dispatch(setBusinessField({ field, value }));

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

      {/* Business Name */}
      <motion.div variants={fadeInRight} custom={1}>
        <Label htmlFor={f.businessName.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.businessName.label}
        </Label>
        <Input
          id={f.businessName.id}
          placeholder={f.businessName.placeholder}
          value={business.businessName}
          onChange={(e) => set("businessName", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.businessName && "border-destructive"
          )}
        />
        {errors.businessName && <p className="mt-1 text-sm text-destructive">{errors.businessName}</p>}
      </motion.div>

      {/* Business Type */}
      <motion.div variants={fadeInRight} custom={2}>
        <Label htmlFor={f.businessType.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.businessType.label}
        </Label>
        <Select value={business.businessType} onValueChange={(v) => set("businessType", v || "")}>
          <SelectTrigger
            id={f.businessType.id}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.businessType && "border-destructive"
            )}
          >
            <SelectValue placeholder={f.businessType.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((bt) => (
              <SelectItem key={bt.value} value={bt.value}>
                {bt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.businessType && <p className="mt-1 text-sm text-destructive">{errors.businessType}</p>}
      </motion.div>

      {/* Business Email */}
      <motion.div variants={fadeInRight} custom={3}>
        <Label htmlFor={f.businessEmail.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.businessEmail.label}
        </Label>
        <Input
          id={f.businessEmail.id}
          type="email"
          placeholder={f.businessEmail.placeholder}
          value={business.businessEmail}
          onChange={(e) => set("businessEmail", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.businessEmail && "border-destructive"
          )}
        />
        {errors.businessEmail && <p className="mt-1 text-sm text-destructive">{errors.businessEmail}</p>}
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
          value={business.contactNo}
          onChange={(e) => set("contactNo", e.target.value)}
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.contactNo && "border-destructive"
          )}
        />
        {errors.contactNo && <p className="mt-1 text-sm text-destructive">{errors.contactNo}</p>}
      </motion.div>

      {/* Employee Count */}
      <motion.div variants={fadeInRight} custom={5}>
        <Label htmlFor={f.employeeCount.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.employeeCount.label}
        </Label>
        <Select value={business.employeeCount} onValueChange={(v) => set("employeeCount", v || "")}>
          <SelectTrigger
            id={f.employeeCount.id}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.employeeCount && "border-destructive"
            )}
          >
            <SelectValue placeholder={f.employeeCount.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {employeeRanges.map((er) => (
              <SelectItem key={er.value} value={er.value}>
                {er.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.employeeCount && <p className="mt-1 text-sm text-destructive">{errors.employeeCount}</p>}
      </motion.div>

      <StepNavigation onBack={() => dispatch(prevStep())} onNext={handleNext} />
    </motion.div>
  );
}