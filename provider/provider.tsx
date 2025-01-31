"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import PostProvider from "@/context/PostContext";
import ResultProvider from "@/context/ResultContext";
import { SessionProvider } from "next-auth/react";
import BehaviourProvider from "@/context/BehaviourContext";

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <PostProvider>
        <ResultProvider>
          <BehaviourProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </BehaviourProvider>
        </ResultProvider>
      </PostProvider>
    </SessionProvider>
  );
};

export default Provider;