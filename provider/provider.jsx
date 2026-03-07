"use client";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/store/store";

export function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
}
