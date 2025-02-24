"use client"; // Додає, що це Client Component

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer, // Просто використовуємо reducer
  },
});
