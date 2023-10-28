import axios from "axios";

const $auth = axios.create({
    baseURL: 'https://api.warehousai.com/api/auth',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

const $AI = axios.create({
    baseURL: 'https://api.warehousai.com/api/ai'
})



export {
    $auth,
    $AI
}