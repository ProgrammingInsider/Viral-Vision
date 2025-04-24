import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VIRAL VISION",
  description: "We are passionate about helping businesses grow and thrive in the digital world. Our team of creative thinkers, strategists, and digital experts work together to deliver innovative solutions that boost brand awareness, generate quality leads, and drive measurable results. From developing powerful content and engaging social media strategies to designing stunning websites and running high-converting ad campaigns, we bring visions to life.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
