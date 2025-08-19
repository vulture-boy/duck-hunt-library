'use client';

import { ApolloWrapper } from "@/lib/apollo-wrapper";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
