import { $AI } from "."

export const getAIById = (id) => {
    const response = $AI.get(`/get/${id}`)
    return response
}

