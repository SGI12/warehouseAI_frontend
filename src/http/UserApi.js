
import { $USER } from "."


export const getUserById = async(id) => {
    const response = $USER.get('/get', {
        params: {
            'id': id
        }
    })
    return response
}

