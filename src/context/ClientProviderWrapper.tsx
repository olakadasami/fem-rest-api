"use client";

import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ClientProviderWrapper({ children }: PropsWithChildren) {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="text-secondary">
      {children}
    </div>
  );
}
