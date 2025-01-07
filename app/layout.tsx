import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "./components";
import { GoogleTagManager } from "@next/third-parties/google";
import { HeaderSelector } from "./HeaderSelector";
import { ContextProvider } from "./ContextProvider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Content Collection",
  description: "The Content Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-1CC25QD8YG" />
      <body className={outfit.className}>
        <ContextProvider>
          <HeaderSelector />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
