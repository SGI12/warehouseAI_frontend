'use client'
import { ResetCSSGlobalStyle } from "@/styles/reset"
import AuthCard from "@/components/auth-card/auth-card"
import Auth from "@/pages/Auth/auth"



export default function Home()  {
  return (
    <div>
      <ResetCSSGlobalStyle/>
      <Auth/>
    </div>
  )
}
