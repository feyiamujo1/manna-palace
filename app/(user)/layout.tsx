"use client"

export const metadata = {
  title: "Menu | Manna Palace Application",
  description:
    'This is the unofficial website of the Manna Palace Application. ',
};
import { CartProvider } from '~/api/CartContext';

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
