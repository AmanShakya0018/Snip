"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import PostProvider from "@/context/PostContext";
import ResultProvider from "@/context/ResultContext";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <PostProvider>
        <ResultProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ResultProvider>
      </PostProvider>
    </SessionProvider>
  );
};

export default Provider;