import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

export const server = import.meta.env.VITE_SERVER;

const rootReducer = combineReducers({
  user: userReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistior = persistStore(store);
