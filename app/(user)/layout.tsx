export const metadata = {
  title: 'Manna Palace Food Ordering Web App',
  description: "Welcome to manna palace web app aims to provide a convenient and seamless food ordering experience, allowing the school community and outsiders enjoy their favorite meals from Manna Palace with ease, flexibility, and reliability.",
}

export default function MainWebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
    </div>
  )
}
