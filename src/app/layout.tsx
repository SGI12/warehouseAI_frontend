import { ResetCSSGlobalStyle } from '@/styles/reset'
import '../styles/global.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <head>
        <title>Warehouse</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <ResetCSSGlobalStyle/>
      <body>
      
        {children}
      
      </body>
      
    </html>
  )
}
