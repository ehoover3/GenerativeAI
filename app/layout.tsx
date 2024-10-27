import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generative AI",
  description: "Generative AI application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Next.js 13 with Clerk</title>
      </head>
      <ClerkProvider signInFallbackRedirectUrl='/dashboard' signUpFallbackRedirectUrl='/dashboard'>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
