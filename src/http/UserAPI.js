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







 