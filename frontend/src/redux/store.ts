import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
