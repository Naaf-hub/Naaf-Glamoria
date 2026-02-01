import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const caslon = localFont({
  src: "./fonts/CaslonTitling.otf",
  variable: "--font-caslon",
  weight: "400",
});
const libreCaslon = localFont({
  src: "./fonts/LibreCaslonText-Regular.ttf",
  variable: "--font-librecaslon",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Naaf Glamoria",
    template: "%s | Naaf Glamoria",
  },
  description: "Discover Naaf Glamoria - where timeless elegance meets modern luxury. Explore our exclusive collection of fine jewelry. Coming Soon.",
  keywords: ["Jewelry", "Naaf Glamoria", "Luxury", "Gold", "Diamonds", "Rings", "Necklaces", "Fine Jewelry"],
  openGraph: {
    title: "Naaf Glamoria",
    description:
      "Discover Naaf Glamoria - where timeless elegance meets modern luxury. Explore our exclusive collection of fine jewelry. Coming Soon.",
    type: "website",
    locale: "en_US",
    siteName: "Naaf Glamoria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naaf Glamoria",
    description:
      "Discover Naaf Glamoria - where timeless elegance meets modern luxury. Explore our exclusive collection of fine jewelry. Coming Soon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${caslon.variable} ${libreCaslon.variable} antialiased`}>{children}</body>
    </html>
  );
}
