
import { federoFont, interFont } from "@/constants/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body
        className={`${interFont.variable} ${federoFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
