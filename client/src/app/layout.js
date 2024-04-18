import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SportsBug",
  description: "One Stop Sports player information website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} flex-grow`}>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
