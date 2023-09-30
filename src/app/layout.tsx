import { ResetCSSGlobalStyle } from '@/styles/reset'
import { Open_Sans } from 'next/font/google'
import '../styles/global.css'

const opensans = Open_Sans({subsets: ['cyrillic']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <ResetCSSGlobalStyle/>
      <body>{children}</body>
      
    </html>
  )
}
