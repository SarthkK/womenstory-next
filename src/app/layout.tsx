import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The.Woman.Story",
  description:
    "The Women Story is an organization working to empower women and make this world a better place to live every single day",
  keywords: ["Empowering Women"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif} antialiased`}>{children}</body>
    </html>
  );
}
