/* Shared TypeScript interfaces for the SignUp module. */

export type UserType = "individual" | "business";

export interface StepProps {
  className?: string;
}

export interface SignUpHeroProps {
  className?: string;
}

export interface SignUpFormProps {
  className?: string;
}

export interface SignUpStepperProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export interface SignUpIllustrationProps {
  step: number;
  className?: string;
}

export interface FileUploadInfo {
  name: string;
  size: number;
  type: string;
}

export interface StepConfig {
  id: number;
  label: string;
}

export interface HeroStepContent {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
}

export interface CountryOption {
  value: string;
  label: string;
  code: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  fileName: string | null;
  fileSize: number | null;
  accept: string;
  maxSizeMB: number;
  error?: string | null;
}

export interface StepNavigationProps {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  backLabel?: string;
  isLoading?: boolean;
  showBack?: boolean;
  nextDisabled?: boolean;
}