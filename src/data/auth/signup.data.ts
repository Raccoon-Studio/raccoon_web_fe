/* All static UI content, labels, and copy for the SignUp module. */
import { Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import type { HeroStepContent, StepConfig } from "@/lib/auth/signup.types";

/* ── Brand ── */
export const brand = {
  name: "Raccoon Studio",
  icon: Sparkles as ComponentType<{ className?: string }>,
} as const;

/* ── Legal links ── */
export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

/* ── Page metadata ── */
export const signupMeta = {
  title: "Create Account — Raccoon Studio",
  description:
    "Sign up for Raccoon Studio — the hub of all AI solutions for individuals and businesses.",
} as const;

/* ── Stepper step configs ── */
export const stepConfigs: StepConfig[] = [
  { id: 1, label: "Type" },
  { id: 2, label: "Details" },
  { id: 3, label: "Address" },
  { id: 4, label: "Verify" },
  { id: 5, label: "Activate" },
];

/* ── Hero content per step ── */
export const heroStepContent: Record<number, HeroStepContent> = {
  1: {
    eyebrow: "Step 1 of 5",
    headline: "Tell Us about your",
    headlineAccent: "use type",
    description:
      "Choose how you plan to use Raccoon Studio so we can personalise your experience.",
  },
  2: {
    eyebrow: "Step 2 of 5",
    headline: "Let's get your",
    headlineAccent: "details",
    description:
      "We need a few details to set up your account securely.",
  },
  3: {
    eyebrow: "Step 3 of 5",
    headline: "Where are you",
    headlineAccent: "based?",
    description:
      "Your location helps us deliver region-specific features and compliance.",
  },
  4: {
    eyebrow: "Step 4 of 5",
    headline: "Verify your",
    headlineAccent: "identity",
    description:
      "A quick verification keeps the platform safe for everyone.",
  },
  5: {
    eyebrow: "Step 5 of 5",
    headline: "Almost",
    headlineAccent: "there!",
    description:
      "One last step — check your inbox for the magic link.",
  },
};

/* ── Step 1 — User type cards ── */
export const userTypeCards = [
  {
    id: "individual" as const,
    title: "Individual",
    description: "Personal use — freelancers, researchers, creators.",
    emoji: "🧑‍💻",
  },
  {
    id: "business" as const,
    title: "Organization",
    description: "Teams & companies that need AI at scale.",
    emoji: "🏢",
  },
] as const;

export const stepOneContent = {
  heading: "How are you using our product?",
  description: "Select the option that best describes you.",
} as const;

/* ── Step 2 — Individual fields ── */
export const individualFields = {
  heading: "Personal Details",
  description: "Enter your information below.",
  firstName: { id: "first-name", label: "First Name", placeholder: "John" },
  lastName: { id: "last-name", label: "Last Name", placeholder: "Doe" },
  email: { id: "ind-email", label: "Email", placeholder: "john@example.com" },
  contactNo: { id: "ind-contact", label: "Contact No.", placeholder: "+91 98765 43210" },
  dateOfBirth: { id: "dob", label: "Date of Birth" },
} as const;

/* ── Step 2 — Business fields ── */
export const businessFields = {
  heading: "Business Details",
  description: "Tell us about your organization.",
  businessName: { id: "biz-name", label: "Business Name", placeholder: "Acme Corp" },
  businessType: { id: "biz-type", label: "Business Type", placeholder: "Select your industry" },
  businessEmail: { id: "biz-email", label: "Business Email", placeholder: "team@acme.com" },
  contactNo: { id: "biz-contact", label: "Contact No.", placeholder: "+91 98765 43210" },
  employeeCount: { id: "biz-employees", label: "How many employees?", placeholder: "Select range" },
} as const;

/* ── Step 3 — Address fields ── */
export const addressFields = {
  heading: "Address Information",
  description: "Where is your primary location?",
  country: { id: "country", label: "Country", placeholder: "Select your country" },
  state: { id: "state", label: "State / Province", placeholder: "Select or enter your state" },
  exactAddress: { id: "address", label: "Exact Address", placeholder: "123 Main St, Floor 2, Building A" },
} as const;

/* ── Step 4 — Verification fields ── */
export const verificationFields = {
  heading: "Identity Verification",
  description: "Upload a government-approved ID to verify your account.",
  idType: { id: "id-type", label: "ID Type", placeholder: "Select ID type" },
  idNumber: { id: "id-number", label: "ID Number", placeholder: "Enter your ID number" },
  upload: {
    label: "Upload ID Document",
    description: "Accepted formats: JPG, PNG, PDF — Max 5 MB",
    dragLabel: "Drag & drop your file here, or",
    browseLabel: "browse",
  },
} as const;

/* ── Step 5 — Email verification ── */
export const emailSentContent = {
  heading: "Check your inbox",
  description:
    "We've sent a verification email with a magic link. Click it to activate your account.",
  subtext: "Didn't receive the email? Check your spam folder or request a new one.",
  resendLabel: "Resend verification email",
  backToLoginLabel: "Back to Login",
  backToLoginHref: "/login",
} as const;

/* ── Step navigation labels ── */
export const navLabels = {
  next: "Continue",
  back: "Back",
  submit: "Submit & Verify",
} as const;