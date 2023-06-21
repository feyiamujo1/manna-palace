import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Manna Palace Food Ordering Web App',
  description: "Welcome to manna palace web app aims to provide a convenient and seamless food ordering experience, allowing the school community and outsiders enjoy their favorite meals from Manna Palace with ease, flexibility, and reliability.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
