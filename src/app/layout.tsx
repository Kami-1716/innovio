import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innovio",
  description: "An AI powered platform",
};

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>

        <body style={{ fontFamily: "Poppins, sans-serif" }}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
