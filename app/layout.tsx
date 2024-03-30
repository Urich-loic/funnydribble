import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navebar from "./ui/navbar/Navbar";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import FooterBar from "./ui/footer/footerbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funny Drbble",
  description: "Dribble duplicate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div><Navebar /></div>
          <div className="pb-5">{children}</div>
          <div className="h-20 flex justify-center items-center"><FooterBar /></div>
        </Theme>
      </body>
    </html>
  );
}
