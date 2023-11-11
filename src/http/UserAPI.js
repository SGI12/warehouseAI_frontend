
import { getCookie, getCookies, setCookie } from "cookies-next";
import { $auth } from ".";
import axios from "axios";




export const registration = async(username, email, password) => {
    const response = await $auth.post('/register', {username, email, password}) 
    return response
}

export const auth = async( data) => {
    const response = await $auth.post('/login', data) 
    return response
}


export const check = async() => {
    
    const response = await $auth.get('/whoami') 
    return response
}

export const logOut = async() => {
    const response = await axios.delete('https://api.warehousai.com/api/auth/logout');
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
    return response
}

export const checkCookies = () => {
    console.log(getCookies())
}





 