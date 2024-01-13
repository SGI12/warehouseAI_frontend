
import { AuthMainContainer } from '@/components/containers/containers'
import AuthCard from '@/components/auth-card/AuthCard'
import { LogoBig } from '@/components/logo/logo'
import Image from 'next/image'








const AuthPage = () => {
  return (
    
    <AuthMainContainer>
        
        <LogoBig>
            <Image width={197} priority={true} height={197} src={"./logo_big.svg"} alt="Logo" />
        </LogoBig>
        <AuthCard/>
    </AuthMainContainer>

  )
}

export default AuthPage