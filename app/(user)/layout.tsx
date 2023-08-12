"use client"

import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Menu | Manna Palace Application",
  description:
    'This is the unofficial website of the Manna Palace Application. ',
};

export default function UserWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}
