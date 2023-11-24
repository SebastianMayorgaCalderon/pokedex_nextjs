import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "src/components/nav-bar";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
