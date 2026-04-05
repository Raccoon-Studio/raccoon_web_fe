/* Redux Toolkit store — factory pattern for Next.js App Router. */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import signupReducer from "./slices/signupSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      signup: signupReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];