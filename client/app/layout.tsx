import "./globals.css";
import { Header } from "./layout/Header";
import { Navbar } from "./layout/Navbar";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="pt-7 pl-20">
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
