
import { getCookie, getCookies, setCookie } from "cookies-next";
import { $auth } from ".";
import axios from "axios";




export const registration = async(data) => {
    const FormDataReg = new FormData()
    FormDataReg.append('username', data.username)
    FormDataReg.append('firstname', data.firstname)
    FormDataReg.append('lastname', data.lastname)
    FormDataReg.append('password', data.password)
    FormDataReg.append('picture', data.picture)
    FormDataReg.append('email', data.email)
    const response = await $auth.post('/register', FormDataReg, ({
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })) 
    if (response.status === 200) {
        setCookie('userId', response.data?.id)
    }
    return response
}

export const auth = async( data) => {
    const response = await $auth.post('/login', data) 
    if (response.status === 200) {
        setCookie('userId', response.data?.user_id)
    }
    return response
}


export const check = async() => {
    const response = await $auth.get('/whoami') 
    return response
}

export const logOut = async() => {
    const response = await axios.delete('https://api.warehousai.com/api/auth/logout', {
        withCredentials: true
    });
    return response
}

export const passResetReq = async(data) => {
    const response = await $auth.post('/reset/request', data)
    if (response.status === 200) {
        setCookie('passResetTokenId', response.data?.id, {maxAge: 60*7})
    }
    return response
}

export const passResetVerify = async(code) => {
    const token = getCookie('passResetTokenId')
    const response = await $auth.get('/reset/verify', {
        params: {
            'verification': code,
            'token_id': token
        }
    })
    if (response.status === 200) {
        setCookie('userId', response.data?.user_id)
    }
    return response
}

export const checkCookies = () => {
    console.log(getCookies())
}


export const passResetConfirm = async(data) => {
    const token = getCookie('passResetTokenId')
    const response = await $auth.post('/reset/confirm', data, {
        params: {
            'token_id': token
        }
    })
    return response
}

export const registerConfirm = async (user, token) => {
    const response = await $auth.get('/register/confirm', {
        params: {
            'user': user,
            'token': token
        }
    })
    return response
}






 