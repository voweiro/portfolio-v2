import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/provider/theme-provider"; // ✅ Ensure correct import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajenaghughrure Voweiro - Portfolio",
  description: "Frontend Developer from Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
