import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Merriweather} from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400", "600", "700"]
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight:["400", "700"]
});

export const metadata: Metadata = {
  title: "Jacob Wildlife Center",
  description: "Look at animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "dark">
      <head>
      <meta name="viewport" content="width-device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.variable} ${merriweather.variable} antialiased`}
      >
      
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
