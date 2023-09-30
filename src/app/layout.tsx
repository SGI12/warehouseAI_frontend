
import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({subsets: ['cyrillic']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
