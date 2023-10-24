
import { AuthMainContainer } from '@/components/containers/containers'
import AuthCard from '@/components/auth-card/AuthCard'
import { LogoBig } from '@/components/logo/logo'







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