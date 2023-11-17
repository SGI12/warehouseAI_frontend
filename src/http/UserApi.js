
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

export const addAIToFavorites = async (id) => {
    const data = {
        id: id
    }
    const response = await $USER.patch('/favorites/add', data)
    return response
}

export const removeAIFromFavorites = async (id) => {
    const data = {
        id: id
    }
    const response = await $USER.patch('/favorites/remove', data)
    return response
}


