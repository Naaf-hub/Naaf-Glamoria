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
  title: "Coming Soon - SAT Realty",
  description: "Our new premium real estate website is coming soon. Stay tuned.",
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
