import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spiceland",
  description: "where taste meets harmony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        {/* ✅ Add your custom favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
