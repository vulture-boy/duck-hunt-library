import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: "duck hunt library",
  description: "a SSBU documentation for Duck Hunt players",
};

import ClientLayout from './client-layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
