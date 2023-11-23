import { $AI } from "."

export const getAIById = async (id) => {
    
    const response = await $AI.get(`/get/`, {
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

export const sendAIRequest = async (id, value) => {
    const data = {
        "model": "gpt-3.5-turbo",
        "max_tokens": 100,
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
        'command_name': 'Message'
    }
    })
    return response
}