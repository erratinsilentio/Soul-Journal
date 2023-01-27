import "./globals.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
