import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Added Outfit
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" }); // Configured Outfit

export const metadata: Metadata = {
  title: "Ajenaghughrure Voweiro - Portfolio",
  description: "Frontend Developer from Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-body bg-background text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
