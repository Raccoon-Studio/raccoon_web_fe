/* Step 4 — ID type selector, ID number, and file upload. */
"use client";

import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/components/providers/store/hook";
import {
  setVerificationField,
  setVerificationFile,
  nextStep,
  prevStep,
  setErrors,
  setSubmitting,
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
import { verificationFields, navLabels } from "@/data/auth/signup.data";
import {
  getIdTypesForContext,
  ACCEPTED_FILE_TYPES,
  MAX_FILE_SIZE_MB,
} from "@/lib/auth/signup.constants";
import FileUploadZone from "./FileUploadZone";
import StepNavigation from "./StepNavigation";
import { cn } from "@/lib/utils";

export default function StepVerification() {
  const dispatch = useAppDispatch();
  const { verification, address, userType, errors, isSubmitting } =
    useAppSelector((s) => s.signup);
  const f = verificationFields;
  const idTypes = getIdTypesForContext(
    address.country,
    userType ?? "individual"
  );

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!verification.idType) e.idType = "Please select an ID type.";
    if (!verification.idNumber.trim()) e.idNumber = "ID number is required.";
    if (!verification.file) e.file = "Please upload your ID document.";
    else if (verification.file.size > MAX_FILE_SIZE_MB * 1024 * 1024)
      e.file = `File must be under ${MAX_FILE_SIZE_MB} MB.`;
    dispatch(setErrors(e));
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    dispatch(clearErrors());
    dispatch(setSubmitting(true));
    /* Replace with actual API call. */
    await new Promise((r) => setTimeout(r, 2000));
    dispatch(setSubmitting(false));
    dispatch(nextStep());
  };

  const handleFileSelect = (file: File | null) => {
    if (!file) {
      dispatch(setVerificationFile(null));
      return;
    }
    dispatch(
      setVerificationFile({
        name: file.name,
        size: file.size,
        type: file.type,
      })
    );
  };

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

      {/* ID Type */}
      <motion.div variants={fadeInRight} custom={1}>
        <Label htmlFor={f.idType.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.idType.label}
        </Label>
        <Select
          value={verification.idType}
          onValueChange={(v) =>
            dispatch(setVerificationField({ field: "idType", value: v || "" }))
          }
        >
          <SelectTrigger
            id={f.idType.id}
            className={cn(
              "h-11 rounded-lg border-border bg-surface-container-low",
              errors.idType && "border-destructive"
            )}
          >
            <SelectValue placeholder={f.idType.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {idTypes.map((it) => (
              <SelectItem key={it.value} value={it.value}>
                {it.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.idType && <p className="mt-1 text-sm text-destructive">{errors.idType}</p>}
      </motion.div>

      {/* ID Number */}
      <motion.div variants={fadeInRight} custom={2}>
        <Label htmlFor={f.idNumber.id} className="mb-2 block text-sm font-medium text-on-surface">
          {f.idNumber.label}
        </Label>
        <Input
          id={f.idNumber.id}
          placeholder={f.idNumber.placeholder}
          value={verification.idNumber}
          onChange={(e) =>
            dispatch(
              setVerificationField({ field: "idNumber", value: e.target.value })
            )
          }
          className={cn(
            "h-11 rounded-lg border-border bg-surface-container-low",
            errors.idNumber && "border-destructive"
          )}
        />
        {errors.idNumber && <p className="mt-1 text-sm text-destructive">{errors.idNumber}</p>}
      </motion.div>

      {/* File Upload */}
      <motion.div variants={fadeInRight} custom={3}>
        <FileUploadZone
          onFileSelect={handleFileSelect}
          fileName={verification.file?.name ?? null}
          fileSize={verification.file?.size ?? null}
          accept={ACCEPTED_FILE_TYPES}
          maxSizeMB={MAX_FILE_SIZE_MB}
          error={errors.file}
        />
      </motion.div>

      <StepNavigation
        onBack={() => dispatch(prevStep())}
        onNext={handleSubmit}
        nextLabel={navLabels.submit}
        isLoading={isSubmitting}
      />
    </motion.div>
  );
}