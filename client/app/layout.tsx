import "./globals.css";
import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 pt-7 sm:pl-20">
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
