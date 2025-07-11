import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import SessionProvider from "./providers/session";
import Footer from "./_components/footer";
import CartProvider from "./providers/cart";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <CartProvider>
            <div className="flex h-full flex-col">
              <Header/>
              <div className="flex-1">
                {children}
              </div>
              <Footer/>
            </div>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
