
import { NextPage } from 'next'
import { AuthMainContainer, LogoBig } from './styled'
import AuthCard from '@/components/auth-card/AuthCard'







const AuthPage = () => {
  return (
    
    <AuthMainContainer>
        <LogoBig>
            <img src={"./logo_big.svg"} alt="Logo" />
        </LogoBig>
        <AuthCard/>
          
    </AuthMainContainer>

  )
}

export default AuthPage