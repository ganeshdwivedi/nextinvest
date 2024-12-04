"use client";
import React, { ReactNode } from "react";
import store from "./store";
import { Provider } from "react-redux";

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
