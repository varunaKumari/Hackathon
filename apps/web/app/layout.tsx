import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "useCases/Providersclients/queryprovider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
        <GoogleOAuthProvider clientId="455624080761-2e7vh29o5qldeimm6qn96qaqjhhgk85h.apps.googleusercontent.com">
            {children}
          <ReactQueryDevtools></ReactQueryDevtools>
        </GoogleOAuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
