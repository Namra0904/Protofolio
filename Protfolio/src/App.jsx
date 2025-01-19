import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Page from "@/components/Page";

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
