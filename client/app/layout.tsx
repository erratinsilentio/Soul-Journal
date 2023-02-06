import "./globals.css";
import { Header } from "../components/layout/header/Header";
import { Navbar } from "../components/layout/navbar/Navbar";
import Providers from "./providers";
import "@fontsource/anybody";
import { Notification } from "@/components/notification/Notification";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 pt-7 font-sans sm:pl-20">
        <Providers>
          <Header />
          <Navbar />
          {children}
          <Notification />
        </Providers>
      </body>
    </html>
  );
}
