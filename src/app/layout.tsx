import { ResetCSSGlobalStyle } from '@/styles/reset'
import '../styles/global.css'
import { AuthContextProvider } from '@/context'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <ResetCSSGlobalStyle/>
      <body>
       <AuthContextProvider>
        {children}
      </AuthContextProvider>
      </body>
      
    </html>
  )
}
