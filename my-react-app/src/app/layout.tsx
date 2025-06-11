import type { Metadata } from "next";
import Header from "./header";
import Footer from "./footer";
import  "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: "duck hunt library",
  description: "a SSBU documentation for Duck Hunt players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        {children}
      </body>
    </html>
  );
}
