"use client";

import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export const ClientThemeProvider = ({ children }: Props) => {
  // You may not need any special handling here as the theme is applied directly
  // via the `ThemeToggle` component that manages `data-theme`.
  useEffect(() => {
    // Ensure the theme is applied on page load
    const storedTheme = localStorage.getItem("theme") || "abyss";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  return <>{children}</>;
};
