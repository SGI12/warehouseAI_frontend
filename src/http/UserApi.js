
import { $USER } from "."


export const getUserById = async(id) => {
    const response = await $USER.get('/get', {
        params: {
            'id': id
        }
    })
    return response
}

export const getUserFavoriteAI = async() => {
    const response = await $USER.get('/favorites')
    return response
}
