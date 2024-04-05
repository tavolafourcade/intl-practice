import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout(props: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <body>{props.children}</body>
    </html>
  )
}
