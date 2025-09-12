import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasilis Milesis",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">{children}</body>
    </html>
  );
}
