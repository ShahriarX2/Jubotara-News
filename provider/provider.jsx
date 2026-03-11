"use client";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { store } from "@/app/store/store";

export function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
