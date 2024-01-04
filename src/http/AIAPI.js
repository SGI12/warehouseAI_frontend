import { formToJSON } from "axios"
import { $AI } from "."

export const getAIById = async (id) => {
    
    const response = await $AI.get(`/get`, {
        params: {
            'id' : id
        }
    })
    return response
}

export const getSeveralAIs = async(query) => {
    const response = await $AI.get(`/get/many`, {
        params: {
            'id' : query
        }
    })
    return response
}

export const sendChatGPTRequest = async (id, value) => {
    const data = {
        "model": "gpt-4",

        "messages": [
            {
                "role": "user",
                "content": value
            }
        ]
}
    const response = await $AI.post(`/command/execute/`, data, {
    params: {
        'ai_id':id,
        'command_name': 'Сhat completion'
    }
    })
    return response
}

export const sendELRequest = async (id, value, command) => {
    const data = {
        "text": value
}
    const response = await $AI.post(`/command/execute/`, data, {
    params: {
        'ai_id':id,
        'command_name': command
    },
    responseType: 'blob'
    })
    return response
}

export const sendImagineRequest = async(id, value) => {
    const AIFormdata = new FormData()
    AIFormdata.append('prompt', value)
    AIFormdata.append('style_id', 29)
    
    const response = await $AI.post('/command/execute', AIFormdata, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            'ai_id':id,
            'command_name': 'Text To Image'
        },
        responseType: 'blob'
    })

    return response
    
}

export const searchAI = async (field, value) => {
    const response = await $AI.get('/search', {
        params: {
            'field': field,
            'value': value,
        }
    })
    return response
}

export const getAIRating = async(ai_id) => {
    const response = await $AI.get('/rating/get', {
        params: {
            'ai_id': ai_id
        }
    })

    return response
}

export const setAIRating = async(ai_id, rate) => {

    const data = {
        "ai_id": ai_id,
        "rate": rate
    }
    const response = await $AI.post('/rating/set', data)
    return response
}