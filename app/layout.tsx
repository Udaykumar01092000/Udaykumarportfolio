import type { Metadata } from "next";
import { Chatbot } from "@/components/Chatbot";
import { ToastProvider } from "@/components/toast-provider";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Kumar Portfolio",
  description: "Gerold-inspired portfolio build in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <ToastProvider>
          {children}
          <Chatbot />
        </ToastProvider>
      </body>
    </html>
  );
}
