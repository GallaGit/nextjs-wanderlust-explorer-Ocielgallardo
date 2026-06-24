import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { FavoritesProvider } from "@/components/favorites/FavoritesProvider";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wonderlust",
  description: "Explorador de experiencias turisticas con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-on-surface">
        <FavoritesProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:py-12 lg:px-6">
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
