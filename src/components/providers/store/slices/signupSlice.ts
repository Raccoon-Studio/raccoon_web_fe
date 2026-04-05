/* SignUp slice — manages multi-step form state for registration. */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType, FileUploadInfo } from "@/lib/auth/signup.types";

interface IndividualDetails {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  dateOfBirth: string;
}

interface BusinessDetails {
  businessName: string;
  businessType: string;
  businessEmail: string;
  contactNo: string;
  employeeCount: string;
}

interface AddressDetails {
  country: string;
  state: string;
  exactAddress: string;
}

interface VerificationDetails {
  idType: string;
  idNumber: string;
  file: FileUploadInfo | null;
}

interface SignupState {
  currentStep: number;
  direction: number;
  userType: UserType | null;
  individual: IndividualDetails;
  business: BusinessDetails;
  address: AddressDetails;
  verification: VerificationDetails;
  isSubmitting: boolean;
  errors: Record<string, string>;
}

const initialState: SignupState = {
  currentStep: 1,
  direction: 1,
  userType: null,
  individual: {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    dateOfBirth: "",
  },
  business: {
    businessName: "",
    businessType: "",
    businessEmail: "",
    contactNo: "",
    employeeCount: "",
  },
  address: {
    country: "",
    state: "",
    exactAddress: "",
  },
  verification: {
    idType: "",
    idNumber: "",
    file: null,
  },
  isSubmitting: false,
  errors: {},
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      const next = action.payload;
      state.direction = next > state.currentStep ? 1 : -1;
      state.currentStep = next;
    },
    nextStep(state) {
      state.direction = 1;
      state.currentStep = Math.min(state.currentStep + 1, 5);
    },
    prevStep(state) {
      state.direction = -1;
      state.currentStep = Math.max(state.currentStep - 1, 1);
    },
    setUserType(state, action: PayloadAction<UserType>) {
      state.userType = action.payload;
    },
    setIndividualField(
      state,
      action: PayloadAction<{ field: keyof IndividualDetails; value: string }>
    ) {
      state.individual[action.payload.field] = action.payload.value;
      delete state.errors[action.payload.field];
    },
    setBusinessField(
      state,
      action: PayloadAction<{ field: keyof BusinessDetails; value: string }>
    ) {
      state.business[action.payload.field] = action.payload.value;
      delete state.errors[action.payload.field];
    },
    setAddressField(
      state,
      action: PayloadAction<{ field: keyof AddressDetails; value: string }>
    ) {
      state.address[action.payload.field] = action.payload.value;
      delete state.errors[action.payload.field];
    },
    setVerificationField(
      state,
      action: PayloadAction<{ field: keyof Omit<VerificationDetails, "file">; value: string }>
    ) {
      state.verification[action.payload.field] = action.payload.value;
      delete state.errors[action.payload.field];
    },
    setVerificationFile(state, action: PayloadAction<FileUploadInfo | null>) {
      state.verification.file = action.payload;
      delete state.errors["file"];
    },
    setErrors(state, action: PayloadAction<Record<string, string>>) {
      state.errors = action.payload;
    },
    clearErrors(state) {
      state.errors = {};
    },
    setSubmitting(state, action: PayloadAction<boolean>) {
      state.isSubmitting = action.payload;
    },
    resetSignup() {
      return initialState;
    },
  },
});

export const {
  setStep,
  nextStep,
  prevStep,
  setUserType,
  setIndividualField,
  setBusinessField,
  setAddressField,
  setVerificationField,
  setVerificationFile,
  setErrors,
  clearErrors,
  setSubmitting,
  resetSignup,
} = signupSlice.actions;

export default signupSlice.reducer;