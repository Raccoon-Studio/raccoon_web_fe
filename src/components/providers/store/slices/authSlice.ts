/* Auth slice — manages login form state and auth flow status. */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  email: "",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      if (state.error) state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetAuth() {
      return initialState;
    },
  },
});

export const { setEmail, setLoading, setError, resetAuth } = authSlice.actions;
export default authSlice.reducer;