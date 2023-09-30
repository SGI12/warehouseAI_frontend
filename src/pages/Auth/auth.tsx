import { NextPage } from 'next'
import { AuthMainContainer, Logo } from './styled'
import AuthCard from '@/components/auth-card/auth-card'




const Auth: NextPage = () => {
  return (

    <AuthMainContainer>
        <Logo>
            <img src="./logo_big.svg" alt="Logo" />
        </Logo>
        <AuthCard/>
    </AuthMainContainer>

  )
}

export default Auth