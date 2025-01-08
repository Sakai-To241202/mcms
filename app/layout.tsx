import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolioをvercelに適用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {" "}
      {/* 日本語の場合は lang="ja" に変更 */}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-5N5JNJM9" />
    </html>
  );
}
