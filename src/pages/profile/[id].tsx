import Loader from "@/components/Loader/Loader";
import BeDevScreen from "@/components/popup-screens/BeDevScreen";
import { GetNeuralButton, ProfileBigButton, ShadowButton } from "@/components/buttons/button";
import { NamesLabel, NamesConatiner, ProfileButtonsContainer, ProfileDefaultButtonsContainer, UserNameAndButtonContainer, UserProfileDataContainer, UserProfileMainContainer } from "@/components/containers/containers"
import Footer from "@/components/footer/footer";

import Header from "@/components/header/header"
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import PencilIcon from "@/components/icons/PencilIcon";

import { NamesInput, UserNameProfileInput } from "@/components/inputs/TextInputs";
import { AStyled } from "@/components/links/link";
import { InputErrorText } from "@/components/paragraphs/Paragraphs";
import { useUserContext } from "@/context/context";
import { check, logOut } from "@/http/AuthAPI";
import { getUserById, updateUserData } from "@/http/UserApi";
import { useValidation } from "@/validation/validation";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChangeEmailScreen from "@/components/popup-screens/ChangeEmailProfileScreen";
import ChangePassScreen from "@/components/popup-screens/ChangePassProfileScreen";

const UserProfile = () => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(true);
    const {user} = useUserContext()
    const [activeDevModal, setActiveDevModal] = useState(false)
    const [isEmailModalActive, setEmailModalActive] = useState(false)
    const [isPasswordModalActive, setPasswordModalActive] = useState(false)
    const [isEditable, setEditable] = useState(false)
    interface IUserData {
        names:string,
        // firstname: string,
        // lastname: string,
        username:string,
        picture: string,
    }
    const [userData, setUserData] = useState<IUserData>({
        names: '',
        // firstname: '',
        // lastname: '',
        username: '',
        picture: '',

    })

    const [initialData, setInitialData] = useState<IUserData>({
        names: '',
        // firstname: '',
        // lastname: '',
        username: '',
        picture: '',
    })

    window.onkeydown = (e:any) => {
        if (isEditable && e.key == 'Enter') {
            checkMarkIconhandler()
        }

        if (isEditable && e.keyCode == 27) {
            setUserData(initialData)
            setEditable(false)
        }
    }
    
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
    const pencilIconHandlerClick = () => {
        setEditable(true)
    }

    const usernameChangeHandler = (e:any) => {
        setUserData({
            ...userData, username: e.target.value
        })
    }

    const checkMarkIconhandler = () => {
        const firstname = userData.names.split(' ')[0]
        const lastname = userData.names.split(' ')[1]
        const isEqual = JSON.stringify(userData) === JSON.stringify(initialData)
        setEditable(false)
        if (fieldsNotEmpty && !isEqual) {
            setInitialData(userData)
            updateUserData(userData.username, firstname, lastname)
            
        .then((res) => {
            console.log(res.data)

        })
        .catch((err) => {
            console.log(err.response?.status)
        })
        }
        else console.log('bimbimbambam')
        
    }

    const NameChangeHandler = (e:any) => {
        setUserData({
            ...userData, 
            names: e.target.value
        })
    }

    // const LastNameChangeHandler = (e:any) => {
    //     setUserData({
    //         ...userData, 
    //         lastname: e.target.value
    //     })
    // }
    let fieldsNotEmpty = (userData.names && userData.username)
    const profileValid = useValidation(fieldsNotEmpty, {isFieldsEmpty: true})
   
    useEffect(() => {
        const getUserData =  () => {
            let pictureUrl = '/mock-avatar.jpg'
            const userId = getCookie('userId')
                
                getUserById(userId).then(res => {
                if (res.data.id != userId) {
                    router.push('/')
                }
                console.log(res)
                if (res.data.picture != '') {
                    pictureUrl = res.data.picture
                }
                setUserData({
                    ...userData,
                    username: res.data.username,
                    names: res.data.firstname + " " + res.data.lastname,
                    // lastname: res.data.lastname,
                    picture: pictureUrl,
                })
                setInitialData({
                    ...initialData,
                    username: res.data.username,
                    names: res.data.firstname + " " + res.data.lastname,
                    // lastname: res.data.lastname,
                    picture: pictureUrl,
                })
                

                setTimeout(() => setLoading(false), 1000)
            })
             .catch ((err) => {
                if (err.response.status === 500)
                    router.push('/')
                console.log(err.response.status)
            }) 
            
        }
        const fetchData = () => {
           
                check()
                .then(() => {
                    getUserData()
                    user.setIsAuth(true)
                    
                })

                
                .catch((err) => {
                    if (err.response.status === 404) {
                        user.setIsAuth(false)
                        router.push('/authpage')
                    }
        
                    console.log(err.response?.data.message)
                })  
    
        }
    fetchData();
    
   
    }, [user]);

    if (isLoading) {
        return <Loader/>
    }
    else 
    return (
        <>
        {activeDevModal && <BeDevScreen setActive={setActiveDevModal}/>}
        {isEmailModalActive && <ChangeEmailScreen setActive = {setEmailModalActive} />}
        {isPasswordModalActive && <ChangePassScreen setActive = {setPasswordModalActive} />}
        <UserProfileMainContainer>
            
            <Header activeModal={activeDevModal}/>
            <UserProfileDataContainer>
                <Image style={{
                 
                    width: '305px',
                    height: '305px',
                    borderRadius: '50%',
                    border: '2px solid #FFB8D7',
                    boxShadow: '0px -3px 105px -1px rgba(251, 157, 198, 0.32)'
                    }} 
                    src={userData.picture} 
                    alt="avatar" width={305} height={305}/>
                <UserNameAndButtonContainer>
                    <NamesConatiner>
                        <NamesLabel>
                        <UserNameProfileInput 
                        
                        size={(userData.username?.length || 0)} 
                        placeholder="Имя пользователя"
                        readOnly={!isEditable}
                        onChange={usernameChangeHandler} 
                        className={isEditable ? 'editable' : 'none'} 
                        value={userData.username} 
                        color="#FFB8D7"/>
                        </NamesLabel>
                    </NamesConatiner>
               
                    
                    <NamesConatiner>
                        <NamesLabel>
                         
                            <NamesInput 
                            placeholder="Имя Фамилия"
                            name="firstname"
                            
                            onChange={NameChangeHandler}
                            readOnly={!isEditable}
                            className={isEditable ? 'editable' : 'none'} 
                            size={(userData.names?.length || 0)} 
                            value={(userData?.names || '') }/> 
                           
                            
                        </NamesLabel>  
                        {/* <NamesLabel>
                            <NamesInput 
                            placeholder="Фамилия"
                            
                            name="lastname"
                            onChange={LastNameChangeHandler}
                            readOnly={!isEditable}
                            className={isEditable ? 'editable' : 'none'} 
                            size={(userData.lastname?.length || 0)}  
                            value={(userData?.lastname || '')  }/> 
                            
                            
                        </NamesLabel>  */}
                        {!isEditable &&  <div onClick={pencilIconHandlerClick}><PencilIcon/></div>}
                        {isEditable && <div onClick={checkMarkIconhandler}><CheckMarkIcon /></div>}
                    </NamesConatiner>
                  
                    <ProfileDefaultButtonsContainer>
                    <ShadowButton onClick={() => {
                        setActiveDevModal(true)
                    }}>Подключить нейронку</ShadowButton>
                    <ShadowButton onClick={() => {
                        setEmailModalActive(true)
                    }}>Сменить E-mail</ShadowButton>
                    <ShadowButton onClick={() => {
                        setPasswordModalActive(true)
                    }}>Сменить пароль</ShadowButton>
                    </ProfileDefaultButtonsContainer>
                   
                    {profileValid.isFieldsEmpty && <InputErrorText className={profileValid.animation}>{profileValid.errors.fieldEmptyError}</InputErrorText>}
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