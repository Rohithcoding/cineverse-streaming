import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./ad-blocker.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cineverse - Free Movies & TV Shows",
  description: "Your only choice for a free movies and tv shows streaming website.",
  applicationName: "Cineverse",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0C0F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background min-h-screen antialiased`}>
        <Header />
        <main className="container mx-auto max-w-full px-3 py-8 sm:px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
