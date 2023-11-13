import Loader from "@/components/Loader/Loader";
import BeDevScreen from "@/components/be-dev-screen/BeDevScreen";
import { GetNeuralButton, ProfileBigButton } from "@/components/buttons/button";
import { ProfileButtonsContainer, UserNameAndButtonContainer, UserProfileDataContainer, UserProfileMainContainer } from "@/components/containers/containers"
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header"
import { H1Styled } from "@/components/headers-text/HeaderText";
import { AStyled } from "@/components/links/link";
import { useUserContext } from "@/context/context";
import { check, logOut } from "@/http/AuthAPI";
import { getUserById } from "@/http/UserApi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [showPopUp, setShowPopUp] = useState(false)
    interface IUserData {
        username:string,
        firstname:string,
        lastname:string,
        picture: string,
    }
    const [userData, setUserData] = useState<IUserData>({
        firstname: '',
        lastname: '',
        username: '',
        picture: '',

    })
    const logOutHandler = async () => {
        try {
            await logOut()
            user.setIsAuth(false)
            router.push('/authpage')
        }
        catch (e:any) {
            console.log(e.response.status)
        }
        
    }
    useEffect(() => {
    const checkSession = async () => {
        try {
            await check()
            user.setIsAuth(true)
            
        }
            catch(err:any)  {
            if (err.response.status === 404) {
                user.setIsAuth(false)
                router.push('/authpage')
            }

            console.log(err.response?.data.message)
        }

    }
    const getUserData = async () => {
        let pictureUrl = '/mock-avatar.jpg'
        try {
        await getUserById().then(res => {
            console.log((res.data.picture !== ''))
            if (res.data.picture != '') {
                pictureUrl = res.data.picture
            }
            setUserData({
                ...userData,
                username: res.data.username,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                picture: pictureUrl,
            })
        });
        } catch (e:any) {
            if (e.response.status === 500)
                router.push('/')
            console.log(e.response.status)
        }
        
    }
    checkSession();
    getUserData();
    setTimeout(() => setLoading(false), 1000)
    }, [user]);
    console.log(userData)
    if (isLoading) {
        return <Loader/>
    }
    else 
    return (
        <>
        {showPopUp && <BeDevScreen setShowPopUp={setShowPopUp}/>}
        <UserProfileMainContainer>
            
            <Header />
            <UserProfileDataContainer>
                <Image style={{
                    borderRadius: '50%',
                    border: '2px solid #FFB8D7',
                    boxShadow: '0px -3px 105px -1px rgba(251, 157, 198, 0.32)'
                    }} src={userData.picture} alt="avatar" width={305} height={305}/>
                <UserNameAndButtonContainer>
                    <H1Styled color="#ffffff">{userData.firstname + ' ' +  userData.lastname} </H1Styled>
                    <GetNeuralButton onClick={() => {
                        setShowPopUp(true)
                    }}>Стать разработчиком</GetNeuralButton>
                </UserNameAndButtonContainer>
            </UserProfileDataContainer>
            <ProfileButtonsContainer>
                <ProfileBigButton disabled={true}>Подписка</ProfileBigButton>
                <AStyled href="https://t.me/gurevnind" target="_blank" rel="noopener noreferrer">
                <ProfileBigButton>Поддержка</ProfileBigButton>
                </AStyled>
                <ProfileBigButton onClick={logOutHandler}>Выйти из аккаунта</ProfileBigButton>
            </ProfileButtonsContainer>
            <Footer/>
        </UserProfileMainContainer>
        </>
    )
}

export default UserProfile