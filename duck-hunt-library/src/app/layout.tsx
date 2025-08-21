import type { Metadata } from "next";
import { type ReactNode } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { default as ClientLayout } from './client-layout';
import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "duck hunt library",
  description: "a SSBU documentation for Duck Hunt players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={majorMonoDisplay.className}>
      <body className="body">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
