import "./globals.css";
import { Header } from "../components/layout/header/Header";
import { Navbar } from "../components/layout/navbar/Navbar";
import Providers from "./providers";
import { Notification } from "@/components/notification/Notification";
import { Montserrat } from "@next/font/google";
import { ConfirmModal } from "@/components/modal/ConfirmModal";

export const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${montserrat.className} bg-gradient-to-b from-stone-800 via-stone-800 to-stone-900 pt-7 sm:pl-20`}
      >
        <Providers>
          <Header />
          <Navbar />
          {children}
          <Notification />
          <ConfirmModal />
        </Providers>
      </body>
    </html>
  );
}
