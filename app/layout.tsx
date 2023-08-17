"use client"
import './globals.css'
import { Raleway } from 'next/font/google'
import { SessionProvider } from "next-auth/react"

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
