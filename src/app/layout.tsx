import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const metadata: Metadata = {
  title: "E-CELL, NIT Rourkela",
  description: "Turn your dreams into reality. Join our community and bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"></link>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="E-Cell, E-Cell NIT Rourkela, ecellnitr, Entrepreneurship Cell, NITR E-Cell, Startup Culture, Innovation, Arthayan, E-Summit"
        />
        <meta name="author" content="Entrepreneurship Cell, NIT Rourkela" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={ `${poppins.variable}`}>{children}</body>
    </html>
  );
}