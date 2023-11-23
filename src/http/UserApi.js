
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
        "ai_id": "0487b43e-b7cf-4a13-996e-315d2debf105"
    }
    const response = await $USER.patch('/favorites/add', data)
    return response
}

export const removeAIFromFavorites = async (id) => {
    
    const response = await $USER.delete('/favorites/delete', {
        data: {
            "ai_id": id
        }
    })
    return response
}


export const updateUserData = async (username, fitstname, lastname) => {
    const data = {
        username: username,
        firstname: fitstname,
        lastname: lastname
    }
    const response = await $USER.patch('/update', data)
    return response
}


export const updateUserEmail = async (email) => {
    const data = {
        email: email,
    }
    const response = await $USER.patch('/update/email', data)
    return response
}

export const updateUserPassword = async (oldpass, newpass) => {
    const data = {
        old_password: oldpass,
        password: newpass
    }

    const response = await $USER.patch('/update/password', data)
    return response
}
