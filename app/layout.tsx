import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GoogleAnalytics } from '@next/third-parties/google'


const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunogi - Affiliate Partner",
  description: "Lumbung Inovasi Teknologi Affiliate Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="backup" className={workSans.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-BVV89VC2BC" />
    </html>
  );
}
