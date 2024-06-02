// providers.js
"use client"; // Indica que este archivo es un Client Component

import { Provider } from "react-redux";
import { store } from "../app/store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
