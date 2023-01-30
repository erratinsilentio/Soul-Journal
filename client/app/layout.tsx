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
      <body className="pt-7">
        <Providers>
          <Header />
          <section className="flex flex-row justify-evenly">
            <Navbar />
            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
