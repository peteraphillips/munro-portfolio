// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { GhibliThemeProvider } from "@/contexts/GhibliThemeContext";
import GhibliToggle from "@/components/GhibliToggle";
import ThemeManager from "@/components/ThemeManager";

export const metadata: Metadata = {
  title: "Peter Phillips Portfolio",
  description: "Scottish Munro mountain-themed developer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <GhibliThemeProvider>
          <ThemeManager />
          <GhibliToggle />
          {children}
        </GhibliThemeProvider>
      </body>
    </html>
  );
}
