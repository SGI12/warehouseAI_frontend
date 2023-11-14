import { $AI } from "."

export const getAIById = (id) => {
    const response = $AI.get(`/get/${id}`)
    return response
}

export const sendAIRequest = (id, value) => {
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
    const response = $AI.post(`/command/execute/`, data, {
    params: {
        'ai_id':id,
        'command_name': 'Message'
    }
    })
    return response
}