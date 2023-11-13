import { getCookie } from "cookies-next"
import { $USER } from "."


export const getUserById = async() => {
    const response = $USER.get('/get', {
        params: {
            'id': getCookie('userId')
        }
    })
    return response
}