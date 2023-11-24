import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "src/components/nav-bar/NavBar";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen w-full">
      <SessionProvider>
        <body className="">
          <NavBar />
          <section className="overflow-y-scroll mb-20 h-screen page-wrapper flex justify-center">
            {children}
          </section>
        </body>
      </SessionProvider>
    </html>
  );
}
